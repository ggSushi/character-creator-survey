-- Database name: character-creator-app

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- User Table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- GET request queries ---------
Select "character".*, 
"races"."name" as "race_name", 
"classes"."name" as "class_name"
from "character"
JOIN "user" ON "user"."id" = "character"."user_id"
JOIN "races" ON "races"."id" = "character"."race_id"
JOIN "classes" ON "classes"."id" = "character"."class_id"
WHERE "user"."id" = 1;


SELECT "spell_list".*, 
"classes"."spell_save_dc", 
"classes"."spell_save_name",
"classes"."spell_atk_mod",
"classes"."cantrips_known",
"classes"."spell_lv1_slots"
FROM "spell_list"
JOIN "classes"
ON "spell_list"."id" = "classes"."cantrip_id_1"
OR "spell_list"."id" = "classes"."cantrip_id_2"
OR "spell_list"."id" = "classes"."cantrip_id_3"
OR "spell_list"."id" = "classes"."cantrip_id_4"
OR "spell_list"."id" = "classes"."cantrip_id_5"
OR "spell_list"."id" = "classes"."spellLv1_id_1"
OR "spell_list"."id" = "classes"."spellLv1_id_2"
OR "spell_list"."id" = "classes"."spellLv1_id_3"
OR "spell_list"."id" = "classes"."spellLv1_id_4"
OR "spell_list"."id" = "classes"."spellLv1_id_5"
JOIN "character" ON "character"."class_id" = "classes"."id"
WHERE "character"."id" = 1 ORDER BY "level";

--
Select "class_feats".* from "class_feats"
JOIN "classes"
ON "class_feats"."id" = "classes"."feat_id_1"
OR "class_feats"."id" = "classes"."feat_id_2"
OR "class_feats"."id" = "classes"."feat_id_3"
JOIN "character" ON "character"."class_id" = "classes"."id"
WHERE "character"."id" = 1;
--

Select "classes"."name" as "class_name", 
"class_feats"."id" as "class_feat_id",
"class_feats"."name" as "class_feat_name",
"class_feats"."description" as "class_feat_desc",
"classes"."hit_dice", "classes"."hit_point_base",
"classes"."skill_prof_1", "classes"."skill_prof_2",
"classes"."skill_prof_3", "classes"."skill_prof_4",
"classes"."save_prof_1", "classes"."save_prof_2",
"classes"."armor_prof", "classes"."tool_prof",
"classes"."tool_prof", "classes"."weapon_prof", "classes"."equipment"
FROM "classes"
JOIN "class_feats" 
ON "class_feats"."id" = "classes"."feat_id_1"
OR "class_feats"."id" = "classes"."feat_id_2"
OR "class_feats"."id" = "classes"."feat_id_3"
JOIN "character" ON "character"."class_id" = "classes"."id"
WHERE "character"."id" = 1; 

Select "race_feats"."id" AS "race_feats_id",
"race_feats"."name" AS "race_feat_name",
"race_feats"."description" AS "race_feat_description",
"races".*
FROM "races"
JOIN "race_feats" 
ON "races"."feats_id_1" = "race_feats"."id"
OR "races"."feats_id_2" = "race_feats"."id"
OR "races"."feats_id_3" = "race_feats"."id"
OR "races"."feats_id_4" = "race_feats"."id"
OR "races"."feats_id_5" = "race_feats"."id"
OR "races"."feats_id_6" = "race_feats"."id"
JOIN "character" ON "character"."race_id" = "races"."id"
WHERE "character"."id" = 1;


Select "languages"."name" AS "language", "races"."id" AS "race_id"
FROM "races"
JOIN "languages"
ON "languages"."id" = "races"."language_id_1"
OR "languages"."id" = "races"."language_id_2"
JOIN "character" ON "character"."race_id" = "races"."id"
WHERE "character"."id" = 1;


-- Character Sheet info -----------------------------------
Create Table "character" (
	"id" Serial Primary Key,
	"user_id" INT References "user",
	"name" varchar (100) NOT NULL,
	"race_id" INT References "races",
	"class_id" INT References "classes",
	"proficiency_bonus" INT default 2,
	"str_score" INT NOT NULL,
	"str_mod" INT NOT NULL,
	"dex_score" INT NOT NULL,
	"dex_mod" INT NOT NULL,
	"con_score" INT NOT NULL,
	"con_mod" INT NOT NULL,
	"int_score" INT NOT NULL,
	"int_mod" INT NOT NULL,
	"wis_score" INT NOT NULL,
	"wis_mod" INT NOT NULL,
	"cha_score" INT NOT NULL,
	"cha_mod" INT NOT NULL,
	"description" varchar (2000),
	"alignment" varchar (20),
	"ideals" varchar (100),
	"flaws" varchar (100),
	"weapon" varchar,
	"inventory" varchar
);

--Adding Character into table
INSERT INTO "character" ("user_id", "name", "race_id", "class_id", "proficiency_bonus",
"str_score", "dex_score", "con_score", "int_score", "wis_score", "cha_score", 
"str_mod", "dex_mod", "con_mod" ,"int_mod", "wis_mod", "cha_mod", "description", "alignment", "ideals", "flaws", "weapon", "inventory")
VALUES (1, 'Tansa Night', 1, 1, 2, 13, 16, 12, 14, 10, 9, 1, 3, 1, 2, 0, -1, 'Spends hours of their day working on projects and learning.', 'Neutral Good', 'Works hard to improve themselves', 'Might work too hard sometimes...', 'Light Crossbow: 1d8 piercing', 'Bag of Holding');


---------
-- Races -------------------------------------------------
CREATE TABLE "races" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"size" varchar NOT NULL,
	"speed" varchar NOT NULL,
	"score_bonus_1" INT,
	"score_bonus_2" INT,
	"feats_id_1" INT References "race_feats",
	"feats_id_2" INT References "race_feats",
	"feats_id_3" INT References "race_feats",
	"feats_id_4" INT References "race_feats",
	"feats_id_5" INT References "race_feats",
	"feats_id_6" INT References "race_feats",
	"language_id_1" INT References "languages",
	"language_id_2" INT References "languages"
);

-- Adding Race to table
INSERT INTO "races" ("name", "size", "speed", "score_bonus_1", "score_bonus_2", "feats_id_1", "feats_id_2", "feats_id_3", "feats_id_4", "language_id_1", "language_id_2")
VALUES ('Halfing', 'Small', '25 ft', 2, 1, 1, 2, 3, 4, 1, 2);

----------------
-- Racial Feats -----------------------------------------
CREATE TABLE "race_feats" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL
);

-- Adding Racial feats to table
INSERT INTO "race_feats" ("name", "description")
VALUES ('Lucky', 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1.'),
('Brave', 'You have advantage on saving throws against being frightened.'),
('Nimble', 'You can move through the space of any creature that is of a size larger than yours.'),
('Lightfoot Halfling: Naturally Stealthy', 'You can attempt to hide even when you are only obscured by a creature that is at least one size larger than you.');


-------------
-- Languages ---------------------------------------------
CREATE TABLE "languages" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL
);

-- Adding Languages to table
INSERT INTO "languages" ("name")
VALUES ('Common'), ('Halfling'), ('Elven'), ('Infernal'), ('Dwarvish'), ('Orc'), ('Draconic');

-----------
-- Classes ------------------------------------------------
CREATE TABLE "classes" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"hit_dice" varchar NOT NULL,
	"hit_point_base" INT NOT NULL,
	"skill_prof_1" varchar,
	"skill_prof_2" varchar,
	"skill_prof_3" varchar,
	"skill_prof_4" varchar,
	"save_prof_1" varchar,
	"save_prof_2" varchar,
	"armor_prof" varchar,
	"tool_prof" varchar,
	"weapon_prof" varchar,
	"equipment" varchar,
	"feat_id_1" INT References "class_feats",
	"feat_id_2" INT References "class_feats",
	"feat_id_3" INT References "class_feats",
	"spell_save_dc" varchar,
	"spell_save_name" varchar,
	"spell_atk_mod" varchar,
	"cantrips_known" INT,
	"cantrip_id_1" INT References "spell_list",
	"cantrip_id_2" INT References "spell_list",
	"cantrip_id_3" INT References "spell_list",
	"cantrip_id_4" INT References "spell_list",
	"cantrip_id_5" INT References "spell_list",
	"spell_lv1_slots" INT,
	"spellLv1_id_1" INT References "spell_list",
	"spellLv1_id_2" INT References "spell_list",
	"spellLv1_id_3" INT References "spell_list",
	"spellLv1_id_4" INT References "spell_list",
	"spellLv1_id_5" INT References "spell_list"
);


-- Adding a Class to the table
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "skill_prof_1", "skill_prof_2", "save_prof_1", "save_prof_2", "weapon_prof", "equipment", "feat_id_1", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2")
VALUES ('Sorcerer', '1d6', '6', 'Arcana', 'Insight', 'Constitution', 'Charisma', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'light crossbow w 20 bolts, arcane focus, explorers pack, 2 daggers', 1, '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 2, 1, 2);


-- Class Feats ----------------------------------------
CREATE TABLE "class_feats" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL
);


-- Adding Class Feats to table
INSERT INTO "class_feats" ( "name", "description")
VALUES ('Sorcerous Origin: Wild Magic', 'Wild Magic Surge
Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it does not require concentration in this case; the spell lasts for its full duration.

Tides of Chaos
Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.

Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.');

-- Spell List -----------------------------------------
CREATE TABLE "spell_list" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"level" varchar NOt NULL,
	"description" varchar NOT NULL
);

-- Adding Spells to List
INSERT INTO "spell_list" ("name", "level", "description")
VALUES ('Silvery Barbs', 'Lv 1', 'Casting Time: 1 reaction, which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw
Range: 60 feet
Components: V
Duration: Instantaneous

You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll.

You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time.'),
('Magic Missile', 'Lv 1', 'Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.

At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.'), 
('Mage Hand', 'Cantrip', 'Casting Time: 1 action
Range: 30 feet
Target: A point you choose within range
Components: V S
Duration: 1 minute
A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.
You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.
The hand can’t attack, activate magic items, or carry more than 10 pounds.'),
('Lightning Lure', 'Lv 1', 'Casting Time: 1 action
Range: Self (15-foot radius)
Components: V
Duration: Instantaneous

You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.

At Higher Levels, the spell damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).'),
('Fire Bolt', 'Lv 1' ,'Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.

At Higher Levels, This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).'),
('Minor Illusion', 'Lv 1', 'Casting Time: 1 action
Range: 30 feet
Components: S, M (a bit of fleece)
Duration: 1 minute

You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.

If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.

If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.');