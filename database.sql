-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE groceryList (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL(5,2) NOT NULL,
	"unit" VARCHAR(20),
	"purchased" BOOLEAN
	);
	
INSERT INTO groceryList ("name", "quantity", "unit", "purchased")
VALUES ('bannanas', '12', 'lbs', 'false');

INSERT INTO groceryList ("name", "quantity", "unit", "purchased")
VALUES ('apples', '3', 'each', 'false');

INSERT INTO groceryList ("name", "quantity", "unit", "purchased")
VALUES ('oranges', '4', 'each', 'true');