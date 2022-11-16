INSERT INTO Pizzas (PizzaName, Ingredients, ImgName, Price)
	VALUES	('Кордон Блю','Ветчина, Курица, Соус Карбонара, Сыр Моцарелла, Сыр Роккфорти','cordon_bleu.jpg', 500),
			('Сырная с ветчиной','Ветчина, Сыр Моцарелла, Томатный соус ', 'cheese_and_ham.jpg',  300),
			('Пепперони','Пепперони, Сыр Моцарелла, Томатный соус', 'pepperoni.jpg', 400),
			('4 Сыра','Соус Карбонара, Сыр Чеддер (тёртый), Сыр Моцарелла, Сыр Роккфорти, Чесночный соус с сыром Пармезан', 'four_cheese.jpg', 600),
			('Гавайская','Ананас, Ветчина, Сыр Моцарелла, Томатный соус', 'hawaiian.jpg', 300),
			('Маргарита','Сыр Моцарелла, Томатный соус', 'margarita.jpg', 300),
			('Карбонара','Бекон, Свежие томаты, Соус Карбонара, Сыр Моцарелла', 'carbonara.jpg', 500),
			('Мясная','Ветчина, Курица, Охотничьи колбаски, Пепперони, Сыр Моцарелла, Томатный соус','meat.jpg', 600)
	GO
	
INSERT INTO Stages(StageName)
	VALUES	('Не начат'),
			('Готовится'),
			('Курьер в пути'),
			('Доставлен')
GO

	EXEC OrderPost @jsonData = '{"CustomerName":"Бенефикт Кукембург","Telephone":"79998887766","DeliveryAddress":"Донская, д. 8 стр. 1","TotalCost":4400, "StageId":2,"Cart":[{"PizzaId":1,"Amount":5},{"PizzaId":2,"Amount": 1},{"PizzaId":3,"Amount":4}]}'
	EXEC OrderPost @jsonData = '{"CustomerName":"Бранденбург Киберскотч","Telephone":"79998886655","DeliveryAddress":"Проспект вернадского, 43, кв 29","TotalCost":4800, "StageId":3,"Cart": [{"PizzaId":1,"Amount":8}]}'
	EXEC OrderPost @jsonData = '{"CustomerName":"Бенедикт Крамбетбэтч","Telephone":"79998885544","DeliveryAddress":"Тверская, д. 1","TotalCost": 2400, "StageId":4,"Cart":[{"PizzaId":4,"Amount":1},{"PizzaId":2,"Amount":14},{"PizzaId":6,"Amount":4}]}'
	EXEC OrderPost @jsonData = '{"CustomerName":"Бенедикт Комбербатч","Telephone":"79998884433","DeliveryAddress":"Ленина, 15","TotalCost":7300,"StageId":1,"Cart":[{"PizzaId":7,"Amount":11},{"PizzaId":8,"Amount":1},{"PizzaId":5,"Amount":4}]}'
	EXEC OrderPost @jsonData = '{"CustomerName":"Бенедихт Камбербеш","Telephone":"79998883322","DeliveryAddress":"Театральная пл., 1","TotalCost":2100, "StageId":4,"Cart":[{"PizzaId":1,"Amount":1},{"PizzaId":2,"Amount":1},{"PizzaId":3,"Amount":1},{"PizzaId":4,"Amount":1},{"PizzaId":5,"Amount":1},{"PizzaId":6,"Amount":1},{"PizzaId":7,"Amount":1},{"PizzaId":8,"Amount":1}]}'
	EXEC OrderPost @jsonData = '{"CustomerName":"Бенефит Крокенбок","Telephone":"79998882211","DeliveryAddress":"Цветной бул., 13","TotalCost":3500, "StageId":1,"Cart":[{"PizzaId":1,"Amount":1},{"PizzaId":2,"Amount":1},{"PizzaId":3,"Amount":1},{"PizzaId":4,"Amount":1},{"PizzaId":5,"Amount":1},{"PizzaId":6,"Amount":1},{"PizzaId":7,"Amount":1},{"PizzaId":8,"Amount":1}]}'
GO