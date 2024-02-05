-- Problem 1:
-- Task: Write a query that shows all the information about all the salespeople
-- in the database. Use a basic select query.

SELECT * 
FROM salespeople;

-- Problem 2:
-- Task: Write a query that shows all the information about all salespeople
-- from the 'Northwest' region.

SELECT * 
FROM salespeople 
WHERE region = 'Northwest';

-- Problem 3:
-- Task: Write a query that shows just the emails of the salespeople from
-- the 'Southwest' region.

SELECT email 
FROM salespeople 
WHERE region = 'Southwest';

-- Problem 4:
-- Task: Write a query that shows the given name, surname, and email of all
-- salespeople in the 'Northwest' region.

SELECT first_name, last_name, email 
FROM salespeople 
WHERE region = 'Northwest';

-- Problem 5:
-- Task: Write a query that shows the common name of melons that cost more
-- than $5.00.

SELECT common_name 
FROM melons 
WHERE price > 5;

-- Problem 6:
-- Task: Write a query that shows the common name and price for all
-- watermelons that cost more than $5.00.

SELECT common_name, price 
FROM melons 
WHERE price > 5 
AND melon_type = 'Watermelon';

-- Problem 7:
-- Task: Write a query that displays all common names of melons that
-- start with the letter 'C'.

SELECT common_name
FROM melons
WHERE common_name
LIKE 'C%';

-- Problem 8:
-- Task: Write a query that shows the common name of any melon with
-- 'Golden' anywhere in the common name.

SELECT common_name
FROM melons
WHERE common_name
LIKE '%Golden%';

-- Problem 9:
-- Task: Write a query that shows all the distinct regions that a
-- salesperson can belong to.

SELECT DISTINCT region
FROM salespeople;

-- Problem 10:
-- Task: Write a query that shows the emails of all salespeople from
-- both the Northwest and Southwest regions.

SELECT email
FROM salespeople
WHERE region = 'Northeast'
OR region = 'Southwest';

-- Problem 11:
-- Task: Write a query that shows the emails of all salespeople from
-- both the Northwest and Southwest regions, this time using an 'IN' clause.

SELECT email
FROM salespeople
WHERE region
IN ('Northwest', 'Southwest');

-- Problem 12:
-- Task: Write a query that shows the email, given name, and surname of
-- all salespeople in either the Northwest or Southwest regions whose
-- surnames start with the letter 'M'.

SELECT email, first_name, last_name
FROM salespeople
WHERE region 
IN ('Northwest', 'Southwest')
AND last_name
LIKE 'M%';

-- Problem 13:
-- Task: Write a query that shows the melon type, common name, price, and
-- the price of the melon given in euros. The 'melons' table has prices in
-- dollars, and the dollar to euro conversion rate is 0.73.

SELECT melon_type, common_name, price, price * 0.73 AS euros
FROM melons;

-- Problem 14:
-- Task: Write a query that shows the total number of customers in our
-- customer table.

SELECT COUNT(*) 
FROM customers;

-- Problem 15:
-- Task: Write a query that counts the number of orders shipped to
-- California.

SELECT COUNT(*)
FROM orders
WHERE shipto_state = 'CA';

-- Problem 16:
-- Task: Write a query that shows the total amount of money spent
-- across all melon orders.

SELECT SUM(order_total)
FROM orders;

-- Problem 17:
-- Task: Write a query that shows the average order cost.

SELECT AVG(order_total)
FROM orders;

-- Problem 18:
-- Task: Write a query that shows the order total that was lowest in price.

SELECT MIN(order_total)
FROM orders;

-- Problem 19:
-- Task: Write a query that fetches the id of the customer whose email
-- is 'pclark74@gmail.com'.

SELECT id
FROM customers
WHERE email = 'pclark74@gmail.com';

-- Problem 20:
-- Task: Write a query that shows the id, status and order_total for all
-- orders made by customer 100.

SELECT id, status, order_total
FROM orders
WHERE customer_id = 100;

-- Problem 21:
--  Task: Write a single query that shows the id, status, and order total
-- for all orders made by 'pclark74@gmail.com'. Use a sub-select to do this.

SELECT id, status, order_total
FROM orders
WHERE customer_id = (
    SELECT id 
    FROM customers
    WHERE email = 'pclark74@gmail.com'
);

-- Problem 22:
-- Write a query that shows the total amount of revenue that comes
-- from internet orders.

SELECT SUM(order_total)
FROM orders
WHERE salesperson_id IS NULL;


