CREATE TABLE classes(
    class_id varchar(24) primary key,
    name varchar(244)
);

CREATE TABLE students(
    id serial primary key,
    fname varchar(244),
    lname varchar(244),
    email varchar(244),
    class varchar(24) REFERENCES classes(class_id)
);

insert into classes(class_id, name)
values('web_dev','Web Development'),
('art','Art'), ('uwbw','Under Water Basket Weaving'),
('hist','History');

insert into students(fname,lname,email,class)
values('Cameron','Grieder','cgriedy@hotmail.com','art'),
('Josh','Lara','unshiftdaddy@hotymail.com','uwbw'),
('Sean','Fagan','pappasean@hotmail.com','hist'),
('Licoln','Bunker','wwIIBunker@gmail.com','web_dev');

insert into students(fname,lname,email,class)
values('gerald','garlic','GG@hotmail.com','web_dev'),
('philip','spencer','unshiftdaddy2@hotymail.com','uwbw'),
('Danny','Devito','bigboi@hotmail.com','uwbw'),
('patty','smith','pSmitty@gmail.com','web_dev');
