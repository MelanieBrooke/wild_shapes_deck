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

INSERT into shapes (animal, seen, challengeRating, size, armorClass, hitPoints, speed, flySpeed, swimSpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, senses, abilities, actions) VALUES ('Bat', true, 0.0, 'tiny', 12, 1, 5, 30, null, 2, 15, 8, 2, 12, 4, null, 'blindsight 60 ft., passive Perception 11', 'Echolocation: ?While it can''t hear, the bat has no blindsight.&Keen Hearing: ?The bat has advantage on Wisdom (Perception) checks that rely on hearing.', 'Bite: ?Melee Weapon Attack: ?+0 to hit, reach 5 ft., one creature.?Hit: ?1 piercing damage.');

INSERT into shapes (animal, seen, challengeRating, size, armorClass, hitPoints, speed, flySpeed, swimSpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, senses, abilities, actions) VALUES ('Black Bear', true, 0.5, 'medium', 11, 19, 40, null, 30, 15, 10, 14, 2, 12, 7, 'Perception +3', 'passive Perception 13', 'Keen Smell: ?The bear has advantage on Wisdom (Perception) checks that rely on smell.', 'Multiattack: ? ?The bear makes two attacks: ? ?one with its bite and one with its claws.&Bite: ?Melee Weapon Attack: ?+3 to hit, reach 5 ft., one target.?Hit: ?5 (1d6 + 2) piercing damage.&Claws: ?Melee Weapon Attack: ?+3 to hit, reach 5 ft., one target.?Hit: ?7 (2d4 + 2) slashing damage.&');

INSERT into shapes (animal, seen, challengeRating, size, armorClass, hitPoints, speed, flySpeed, swimSpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, senses, abilities, actions) VALUES ('Boar', false, 0.25, 'medium', 11, 11, 40, null, null, 13, 11, 12, 2, 9, 5, null, 'passive Perception 9', 'Charge: ?If a boar moves at least 20 fet straight towards a creature right before hitting it with a tusk attack, the target takes an extra 3 (1d6) slashing damage and must succeed on a DC 11 Strength saving throw or be knocked prone.&Relentless (Recharges after the Boar Finishes a Short or Long Rest): ?If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.', 'Tusk: ?Melee Weapon Attack: ?+3 to hit, reach 5 ft., one target.?Hit: ?4 (1d6 + 1) slashing damage.');

INSERT into shapes (animal, seen, challengeRating, size, armorClass, hitPoints, speed, flySpeed, swimSpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, senses, abilities, actions) VALUES ('Brown Bear', true, 1.0, 'large', 11, 34, 40, null, 30, 19, 10, 16, 2, 13, 7, 'Perception +3', 'passive Perception 13', 'Keen Smell: ?The bear has advantage on Wisdom (Perception) checks that rely on smell.', 'Multiattack: ? ?The bear makes two attacks: ? ?one with its bite and one with its claws.&Bite: ?Melee Weapon Attack: ?+5 to hit, reach 5 ft., one target.?Hit: ?8 (1d8 + 4) piercing damage.&Claws: ?Melee Weapon Attack: ?+5 to hit, reach 5 ft., one target.?Hit: ?11 (2d6 + 4) slashing damage.&');