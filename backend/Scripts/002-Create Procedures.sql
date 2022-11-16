/* Pizzas procedures */
CREATE PROCEDURE PizzaGetAll
AS
BEGIN
	SELECT * FROM Pizzas
END
GO

 /* Order procedures */
 CREATE PROCEDURE OrderGetAll
 AS
 BEGIN
	SELECT	OrderId,
			CustomerName,
			Telephone,
			DeliveryAddress,		
			TotalCost,
			DateOfPurchase,
			Orders.StageId,
			StageName
FROM Orders
LEFT JOIN Stages ON Orders.StageId = Stages.StageId

	SELECT OrderId, PizzaName, Amount 
	FROM PizzasInCart as c 
	LEFT JOIN Pizzas as p ON c.PizzaId = p.PizzaId
 END
 GO

 CREATE PROCEDURE OrderGetFiltered
 @filter SMALLINT
 AS
 BEGIN
	SELECT	OrderId,
			CustomerName,
			Telephone,
			DeliveryAddress,		
			TotalCost,
			DateOfPurchase,
			Orders.StageId,
			StageName
FROM Orders
LEFT JOIN Stages ON Orders.StageId = Stages.StageId
WHERE Orders.StageId = @filter

	SELECT OrderId, PizzaName, Amount 
	FROM PizzasInCart as c 
	LEFT JOIN Pizzas as p ON c.PizzaId = p.PizzaId
END
GO

CREATE PROCEDURE OrderPost
	@jsonData VARCHAR(max)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO Orders (CustomerName, Telephone, DeliveryAddress,TotalCost, StageId)
	SELECT CustomerName, Telephone, DeliveryAddress, TotalCost, StageId
	FROM OPENJSON(@jsonData)
		WITH(
			CustomerName VARCHAR(20) '$.CustomerName',
			Telephone VARCHAR(11) '$.Telephone',
			DeliveryAddress VARCHAR(80) '$.DeliveryAddress',
			TotalCost INT '$.TotalCost',
			StageId INT '$.StageId'
			);
	DECLARE @newOrderId INT = SCOPE_IDENTITY();

	INSERT INTO PizzasInCart(PizzaId, Amount)
	SELECT PizzaId, Amount FROM OPENJSON(@jsonData, '$.Cart')
		WITH(
			PizzaId INT,
			Amount INT
		) as pizzas

	UPDATE PizzasInCart
	SET OrderId = @newOrderId 
	WHERE OrderId is null
END
GO
