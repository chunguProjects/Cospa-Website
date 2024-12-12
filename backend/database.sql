
CREATE TABLE IF NOT EXISTS `news` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
title varchar(255) NOT NULL,
description varchar(255) NOT NULL,
image varchar(255) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `activities` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
title varchar(255) NOT NULL,
description varchar(255) NOT NULL,
image varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `admins` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
fname varchar(255) NOT NULL,
lname varchar(255) NOT NULL,
email varchar(255) NOT NULL,
username varchar(255) NOT NULL,
password varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO `admins` (`fname`, `lname`, `email`, `username`, `password`) VALUES
('chungu', 'steven', 'schungu@gmail.com', 'chungu', '1234');