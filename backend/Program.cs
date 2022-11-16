using backend.Data;
using backend.Interfaces;
using DbUp;


// Add services to the container.
var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

DropDatabase.For.SqlDatabase(connectionString);
EnsureDatabase.For.SqlDatabase(connectionString);
var upgrader = DeployChanges.To
    .SqlDatabase(connectionString)
    .WithScriptsEmbeddedInAssembly(System.Reflection.Assembly.GetExecutingAssembly())
    .WithTransaction()
    .Build();
if(upgrader.IsUpgradeRequired())
{
    upgrader.PerformUpgrade();
}
builder.Services.AddCors(setup => {
    setup.AddPolicy("frontendOrigin", policy =>
    {
        policy
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddScoped<IDataRepository, DataRepository>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the HTTP request pipeline.
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

app.UseHttpsRedirection();

app.UseCors("frontendOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
