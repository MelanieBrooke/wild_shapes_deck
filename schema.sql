DROP DATABASE IF EXISTS wildshapes;

CREATE DATABASE wildshapes;

USE wildshapes;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  characterName VARCHAR(30),
  druidLevel TINYINT
);

CREATE TABLE shapes (
  id INT NOT NULL AUTO_INCREMENT,
  animal VARCHAR(30) NOT NULL,
  seen BOOLEAN DEFAULT false,
  challengeRating FLOAT,
  size ENUM('tiny', 'medium', 'large')
  armorClass TINYINT,
  hitPoints TINYINT,
  speed TINYINT,
  flySpeed TINYINT,
  swimSpeed TINYINT,
  climbSpeed TINYINT,
  strength TINYINT,
  dexterity TINYINT,
  constitution TINYINT,
  intelligence TINYINT,
  wisdom TINYINT,
  charisma TINYINT,
  skills VARCHAR(255),
  senses VARCHAR(255),
  ability1 VARCHAR(512),
  ability2 VARCHAR(512),
  ability3 VARCHAR(512),
  action1 VARCHAR(512),
  action2 VARCHAR(512),
  action3 VARCHAR(512)
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sq l
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
 *
 *  If you need assistance with this step,
 *  please talk to a proctor.
*/

INSERT into user (characterName, druidLevel) VALUES ('Enoki', 5);

-- INSERT into shapes (animal, challengeRating, size, armorClass, hitPoints) VALUES ('bat', 0.0, 'tiny', 12, 1)