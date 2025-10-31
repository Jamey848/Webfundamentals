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
INSERT INTO  unit (unitname) VALUES ("count");
INSERT INTO category (categoryname) VALUES ("fruit");

INSERT INTO product (productname, categoryID) VALUES(
"bananas",
(SELECT categoryID FROM category WHERE categoryname = "fruit")
);

INSERT receipt (shoppingnodeID, productID, storeID, unitID, price, quantity, quantifier) VALUES(
29,
(SELECT productID FROM product WHERE productname = "bananas"),
(SELECT storeID FROM store WHERE storename = "Aldi"),
(SELECT unitID from unit WHERE unitname = "count"),
2.99,
1,
2
);

SELECT * FROM receipt;
SELECT * FROM shoppingnode;

INSERT INTO shoppingnode (usersID, shoppingnodename, shoppingdate, futurepurchase) VALUES (
3,
"Bought some bananas",
'2025-04-26',
false
);

SELECT RE.storeID, ST.storename, CAST(Count(RE.storeID) AS SIGNED) FROM receipt as RE
INNER JOIN shoppingnode as SN on RE.receiptID = SN.receiptID
INNER JOIN store as ST on RE.storeID = ST.storeID
WHERE SN.usersID = 3 AND SN.futurepurchase = false GROUP BY storeID ORDER BY RE.storeID desc;

SHOW CREATE TABLE shoppingnode;

ALTER TABLE shoppingnode DROP FOREIGN KEY shoppingnode_ibfk_2;
ALTER TABLE shoppingnode DROP COLUMN receiptID;

ALTER TABLE receipt ADD COLUMN shoppingnodeID INT;

UPDATE receipt R
JOIN shoppingnode as SN ON SN.receiptID = R.receiptID
SET R.shoppingnodeID = SN.shoppingnodeID;

SELECT RE.receiptID, RE.shoppingnodeID, SN.shoppingnodeID, SN.shoppingdate, SN.usersID
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.usersID = 3;

SELECT SUM(RE.price) AS total
FROM receipt AS RE
INNER JOIN shoppingnode AS SN ON SN.shoppingnodeID = RE.shoppingnodeID
WHERE SN.shoppingdate BETWEEN '2025-10-26' AND '2025-10-31'
AND SN.usersID = 3;


SELECT * FROM shoppingnode;

SELECT * FROM users;

SELECT * FROM receipt;

SELECT * FROM shoppingnode;

DELETE FROM shoppingnode;
DELETE FROM receipt
