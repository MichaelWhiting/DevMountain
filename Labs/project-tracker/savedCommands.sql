-- Step 1
CREATE TABLE students (
    github VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

INSERT INTO students(github, first_name, last_name)
VALUES('jhacks', 'Jane', 'Hacker'),
('sdevelops', 'Sarah', 'Developer');

-- Step 2
SELECT last_name FROM students;
SELECT github, first_name FROM students;
SELECT * FROM students WHERE first_name='Sarah';
SELECT * FROM students WHERE github='sdevelops';
SELECT first_name, last_name FROM students WHERE github='jhacks';

-- Step 3
CREATE TABLE projects(
    title VARCHAR(30) PRIMARY KEY,
    description TEXT,
    max_grade INTEGER
);

INSERT INTO projects(title, description, max_grade)
VALUES('Markov', 'Tweets generated from Markov chains', 50),
('Blockly', 'Programmatic Logic Puzzle Game', 100),
('Tic Tac Toe', 'Game', 50);

-- Step 4
/* This command below will save the current DB into an sql file.
-- $ pg_dump project-tracker > project-tracker.sql
-- After then, you can run to create a new DB
-- $ dropdb project-tracker
-- $ createdb project-tracker
-- Then run this command to restore the database
-- $ psql project-tracker < project-tracker.sql
*/

-- Step 5
SELECT title, max_grade FROM projects WHERE max_grade > 50;
SELECT title, max_grade FROM projects WHERE max_grade > 10 AND max_grade < 60;
SELECT title, max_grade FROM projects WHERE max_grade < 25 AND max_grade > 75;
SELECT * FROM projects ORDER BY max_grade; -- DESC at the end if want it to be sorted other way.

-- Step 6
CREATE TABLE grades(
    id SERIAL PRIMARY KEY,
    student_github VARCHAR(30) REFERENCES students,
    project_title VARCHAR(30) REFERENCES projects,
    grade INTEGER
);

INSERT INTO grades(student_github, project_title, grade)
VALUES('jhacks', 'Markov', 10),
('jhacks', 'Blockly', 2),
('jhacks', 'Tic Tac Toe', 50),
('sdevelops', 'Markov', 50),
('sdevelops', 'Blockly', 100),
('sdevelops', 'Tic Tac Toe', 30);

-- Step 7
SELECT * FROM students JOIN grades ON (students.github = grades.student_github);

SELECT students.first_name, 
       students.last_name, 
       grades.project_title, 
       grades.grade 
FROM students JOIN grades ON (students.github = grades.student_github)
JOIN projects ON (grades.project_title = projects.title);


SELECT *
FROM students JOIN grades ON (students.github = grades.student_github)
JOIN projects ON (grades.project_title = projects.title) WHERE github = 'jhacks';










SELECT students.first_name, 
       students.last_name,
       grades.project_title,
       grades.grade,
       projects.max_grade
FROM students JOIN grades ON (students.github = grades.student_github)
JOIN projects ON (grades.project_title = projects.title);