CREATE TABLE users(
usersID int not null auto_increment,
username varchar(255) not null,
userpassword varchar(255) not null,
gmail varchar(255) not null,
permission int not null,
PRIMARY KEY (usersID)
);

CREATE TABLE store(
storeID int not null auto_increment,
storename varchar(255),
PRIMARY KEY (storeID)
);

CREATE TABLE category(
categoryID int not null auto_increment,
categoryname varchar(255) not null,
PRIMARY KEY (categoryID)
);

CREATE TABLE unit(
unitID int not null auto_increment,
unitname varchar(255) not null,
PRIMARY KEY(unitID)
);

CREATE TABLE product(
productID int not null auto_increment,
productname varchar(255),
categoryID int not null,
PRIMARY KEY (productID),
FOREIGN KEY (categoryID) REFERENCES category(categoryID)
);

CREATE TABLE receiptitems(
receiptitems int not null auto_increment,
productID int not null,
storeID int not null,
unitID int not null,
receiptID int not null,
price decimal(10, 2),
quantity int,
amount int,
PRIMARY KEY (receiptitems),
FOREIGN KEY (productID) REFERENCES product(productID),
FOREIGN KEY (storeID) REFERENCES store(storeID),
FOREIGN KEY (unitID) REFERENCES unit(unitID),
FOREIGN KEY (receiptID) REFERENCES receipt(receiptID)
);

CREATE TABLE receipt(
receiptID int not null auto_increment,
usersID int not null,
receiptname varchar(255),
receiptdate date,
futurepurchase boolean,
PRIMARY KEY (receiptID),
FOREIGN KEY (usersID) REFERENCES users(usersID)
);

CREATE TABLE budget(
budgetID int not null auto_increment,
usersID int not null,
budgetamount decimal(10,2),
startdate date,
enddate date,
PRIMARY KEY(budgetID)
);

ALTER TABLE receiptitems RENAME COLUMN receiptitems TO receiptitemsID;
ALTER TABLE receipt
ADD COLUMN budgetID INT;

INSERT INTO users (username, userpassword, gmail, budget, permission) VALUES ("JeffTheBanned", "Heyaa", "maaktnieuit", 0, 3);

UPDATE users
SET userpassword = '$2b$10$uMAZOjQB5tGeg4USxEyP9ONl/2HIEtMm3.eyajgfCwguaO05./dMm'
WHERE usersID = 1; 

SELECT * FROM users;

INSERT INTO store (storename) VALUES ("Aldi");
INSERT INTO  unit (unitname) VALUES ("box");
INSERT INTO category (categoryname) VALUES ("spices & herbs");

INSERT INTO product (productname, categoryID) VALUES ("beer");

SELECT * FROM category;

SELECT * FROM receipt;

INSERT INTO category (categoryname) VALUES ("vegetables");
INSERT INTO category (categoryname) VALUES ("fruit");
INSERT INTO category (categoryname) VALUES ("alcohol");
INSERT INTO category (categoryname) VALUES ("hygiene");
INSERT INTO category (categoryname) VALUES ("dairy");
INSERT INTO category (categoryname) VALUES ("beverages");

INSERT INTO product (productname, categoryID) VALUES(
"toilet paper",
(SELECT categoryID FROM category WHERE categoryname LIKE "hygiene")
);

SELECT * FROM product;
SELECT * FROM receiptitems;
SELECT * FROM unit;
INSERT INTO unit (unitname) VALUES ("cl");
SELECT * FROM category;

INSERT receiptitems (receiptID, productID, unitID, price, quantity, amount) VALUES(
4,
(SELECT productID FROM product WHERE productname LIKE ("toilet paper")),
(SELECT unitID from unit WHERE unitname = "#"),
16.99,
1,
16
);
SHOW CREATE TABLE receiptitems;
DELETE FROM shoppingnode;

SELECT * FROM store;

SELECT * FROM receipt;

SELECT * FROM receiptitems;

SELECT SUM(RE.price) AS total
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND SN.usersID = 3;

DELETE FROM receipt;

SELECT * FROM shoppingnode
WHERE shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND usersID = 3;

INSERT INTO users (username, userpassword, gmail, permission) VALUES ("JamesTheErased", "DOCKER123@#", "jamey.verlinden@gmail.com", 1);

SELECT * FROM receipt;
SELECT * FROM shoppingnode;
SELECT * FROM store;
INSERT INTO receipt (usersID, storeID, receiptname, receiptdate, futurepurchase) VALUES (
1,
2,
"Made some groceries",
'2025-12-31',
true
);

SELECT * FROM product;
SELECT * FROM receipt;

SELECT SUM(price) as TotalSum, ROUND(AVG(price), 2) as AverageSum
FROM receiptitems as RI
INNER JOIN receipt as RE on RE.receiptID = RI.receiptID
WHERE RE.usersID = 1;

SELECT * FROM receipt;

ALTER TABLE receiptitems DROP storeID;

ALTER TABLE receiptitems DROP FOREIGN KEY receiptitems_ibfk_2;
ALTER TABLE receiptitems DROP COLUMN storeID;

SET FOREIGN_KEY_CHECKS = 1;

ALTER TABLE receipt
ADD COLUMN storeID INT not null;

ALTER TABLE receipt
ADD CONSTRAINT fk_receipt_store
FOREIGN KEY (storeID) REFERENCES store(storeID);

INSERT INTO store (storename) VALUES ("Delhaize");
INSERT INTO store (storename) VALUES ("Aldi");
INSERT INTO store (storename) VALUES ("Lidl");
INSERT INTO store (storename) VALUES ("Colruyt");

INSERT INTO unit (unitname) VALUES ("l");
INSERT INTO unit (unitname) VALUES ("cl");
INSERT INTO unit (unitname) VALUES ("g");
INSERT INTO unit (unitname) VALUES ("kg");
INSERT INTO unit (unitname) VALUES ("#");
INSERT INTO unit (unitname) VALUES ("l");
INSERT INTO unit (unitname) VALUES ("l");
INSERT INTO unit (unitname) VALUES ("l");
INSERT INTO unit (unitname) VALUES ("l");
INSERT INTO unit (unitname) VALUES ("l");

SELECT RE.storeID, ST.storename, CAST(Count(RE.storeID) AS SIGNED) FROM receipt as RE
INNER JOIN shoppingnode as SN on RE.receiptID = SN.receiptID
INNER JOIN store as ST on RE.storeID = ST.storeID
WHERE SN.usersID = 3 AND SN.futurepurchase = false GROUP BY storeID ORDER BY RE.storeID desc;

SHOW CREATE TABLE shoppingnode;

ALTER TABLE shoppingnode DROP FOREIGN KEY shoppingnode_ibfk_2;
ALTER TABLE shoppingnode DROP COLUMN receiptID;

ALTER TABLE shoppingnode ADD COLUMN storeID INT NOT NULL;

SELECT RE.receiptID, RE.shoppingnodeID, SN.shoppingnodeID, SN.shoppingdate, SN.usersID
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.usersID = 3;

SELECT SUM(RE.price) AS total
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND SN.usersID = 3;

ALTER TABLE receipt DROP COLUMN storeID;
ALTER TABLE receipt DROP FOREIGN KEY receipt_ibfk_2;

SELECT * FROM shoppingnode as SN
INNER JOIN receipt as RE on SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.usersID = 3 AND SN.shoppingnodeID = 51;

SELECT * FROM shoppingnode;

SELECT * FROM users;

SELECT * FROM receipt;

SELECT * FROM shoppingnode;

DELETE FROM shoppingnode;
DELETE FROM receipt;

SELECT ST.storename, COUNT(ST.storeID) FROM store as ST
INNER JOIN shoppingnode as SN ON ST.storeID = SN.storeID
GROUP BY ST.storeID ORDER BY COUNT(ST.storeID) desc LIMIT 1;

SELECT * FROM receipt as RE
WHERE RE.shoppingnodeID = 50;

SELECT * FROM receipt;

SELECT PR.productname, RE.price, CONCAT(RE.quantifier, ' x ', RE.quantity, UN.unitname) as QUA, CA.categoryname FROM receipt as RE
INNER JOIN product as PR on RE.productID = PR.productID
INNER JOIN category as CA on PR.categoryID = CA.categoryID
INNER JOIN unit as UN on RE.unitID = UN.unitID 
INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
WHERE SN.usersID = 3 AND RE.shoppingnodeID = 51;

select * from product;
select * from category;
select * from unit;

SELECT CONCAT('€', SUM(price)) as TotalSum, CONCAT('€',ROUND(AVG(price), 2)) as AverageSUM 
FROM receipt as RE
INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
WHERE SN.usersID = 3;

SELECT * FROM receipt as RE;

SELECT CA.categoryname, COUNT(CA.categoryname) as categorycount, SUM(RE.price) as totalprice FROM category as CA
INNER JOIN product AS PR ON CA.categoryID = PR.categoryID
INNER JOIN receipt AS RE ON PR.productID = RE.productID
INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
WHERE SN.usersID = 3 GROUP BY CA.categoryname ORDER BY categorycount desc;

SELECT * FROM users;

INSERT INTO users (username, userpassword, gmail, permission) VALUES ("SamuraiJack", "AKU", "@gmail.com", 2);

UPDATE users SET gmail = "jammie.verlinden@gmail.com" WHERE usersID = 3;

SELECT SUM(price);

SELECT CA.categoryname, SUM(RE.quantifier) as Amountbought, SUM(RE.price) as Totalprice, SN.shoppingdate FROM category as CA
INNER JOIN product as PR on CA.categoryID = PR.categoryID
INNER JOIN receipt as RE on RE.productID = PR.productID
INNER JOIN shoppingnode as SN on RE.shoppingnodeID = SN.shoppingnodeID
WHERE SN.usersID = 3
GROUP BY CA.categoryname, SN.shoppingdate
ORDER BY SN.shoppingdate asc;
SELECT * FROM users;
SELECT 
  CA.categoryname, 
  SUM(RE.quantifier) AS total_items, 
  SUM(RE.price) AS total_spent, 
  SN.shoppingdate
FROM category AS CA
INNER JOIN product AS PR ON CA.categoryID = PR.categoryID
INNER JOIN receipt AS RE ON RE.productID = PR.productID
INNER JOIN shoppingnode AS SN ON RE.shoppingnodeID = SN.shoppingnodeID
WHERE SN.usersID = 3 AND CA.categoryname = "fruit"
GROUP BY CA.categoryname, SN.shoppingdate
ORDER BY SN.shoppingdate;

SELECT * FROM receiptitems;

SELECT * FROM receipt as RE
INNER JOIN product as PR on RE.productID = RE.productID;
SELECT * FROM category;

SELECT * FROM category;
INSERT INTO category (categoryname) VALUES ("alcohol");

