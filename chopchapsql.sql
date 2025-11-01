CREATE TABLE users(
usersID int not null auto_increment,
username varchar(255) not null,
userpassword varchar(255) not null,
gmail varchar(255) not null,
budget decimal(10, 2),
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

CREATE TABLE receipt(
receiptID int not null auto_increment,
productID int not null,
storeID int not null,
unitID int not null,
shoppingnodeID int not null,
price decimal(10, 2),
quantity int,
quantifier int,
PRIMARY KEY (receiptID),
FOREIGN KEY (productID) REFERENCES product(productID),
FOREIGN KEY (storeID) REFERENCES store(storeID),
FOREIGN KEY (unitID) REFERENCES unit(unitID),
FOREIGN KEY (shoppingnodeID) REFERENCES shoppingnode(shoppingnodeID)
);

CREATE TABLE shoppingnode(
shoppingnodeID int not null auto_increment,
usersID int not null,
shoppingnodename varchar(255),
shoppingdate date,
futurepurchase boolean,
PRIMARY KEY (shoppingnodeID),
FOREIGN KEY (usersID) REFERENCES users(usersID)
);

INSERT INTO users (username, userpassword, gmail, budget, permission) VALUES ("JeffTheBanned", "Heyaa", "maaktnieuit", 0, 3);

UPDATE users
SET userpassword = '$2b$10$uMAZOjQB5tGeg4USxEyP9ONl/2HIEtMm3.eyajgfCwguaO05./dMm'
WHERE usersID = 1; 

SELECT * FROM users;

INSERT INTO store (storename) VALUES ("Aldi");
INSERT INTO  unit (unitname) VALUES ("box");
INSERT INTO category (categoryname) VALUES ("spices & herbs");

INSERT INTO product (productname, categoryID) VALUES(
"carrots",
(SELECT categoryID FROM category WHERE categoryname LIKE "vegetables")
);

SELECT * FROM product;
SELECT * FROM receipt;

INSERT receipt (shoppingnodeID, productID, unitID, price, quantity, quantifier) VALUES(
51,
(SELECT productID FROM product WHERE productname LIKE ("%carrot%")),
(SELECT unitID from unit WHERE unitname = "count"),
3.99,
1,
4
);
DELETE FROM shoppingnode;

SELECT * FROM store;

SELECT SUM(RE.price) AS total
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND SN.usersID = 3;

DELETE FROM receipt;

SELECT * FROM shoppingnode
WHERE shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND usersID = 3;


SELECT * FROM receipt;
SELECT * FROM shoppingnode;
SELECT * FROM store;
INSERT INTO shoppingnode (usersID, storeID, shoppingnodename, shoppingdate, futurepurchase) VALUES (
3,
2,
"Made some groceries",
'2025-10-31',
false
);

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

UPDATE unit 
SET unitname = "#"
WHERE unit.unitID = 1;