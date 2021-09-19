DROP DATABASE IF EXISTS wildshapes;

CREATE DATABASE wildshapes;

USE wildshapes;

CREATE TABLE user (
  userid INT NOT NULL AUTO_INCREMENT,
  characterName VARCHAR(30),
  druidLevel TINYINT,
  PRIMARY KEY (userid)
);

CREATE TABLE shapes (
  id INT NOT NULL AUTO_INCREMENT,
  animal VARCHAR(30) NOT NULL,
  seen BOOLEAN DEFAULT false,
  challengeRating FLOAT,
  size ENUM('tiny', 'medium', 'large'),
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
  abilities VARCHAR(1024),
  actions VARCHAR(1024),
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

-- For formatting on the client side, the ? is to separate formatting, and the & to separarate different abilities and actions

INSERT into shapes (animal, seen, challengeRating, size, armorClass, hitPoints, speed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, senses, abilities, actions) VALUES ('Bat', true, 0.0, 'tiny', 12, 1, 5, 30, 2, 15, 8, 2, 12, 4, 'blindsight 60 ft., passive Perception 11', 'Echolocation: ?While it can''t hear, the bat has no blindsight.&Keen Hearing: ?The bat has advantage on Wisdom (Perception) checks that rely on hearing.', 'Bite: ?Melee Weapon Attack: ?+0 to hit, reach 5 ft., one creature.?Hit: ?1 piercing damage.')