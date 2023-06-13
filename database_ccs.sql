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

-- Character Table
Create Table "character" (
	"id" Serial Primary Key,
	"user_id" INT References "user",
	"name" varchar (100) NOT NULL,
	"campaign" varchar (200),
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
	"skill_1" varchar (100),
	"skill_2" varchar (100),
	"skill_3" varchar (100),
	"skill_4" varchar (100),
	"skill_5" varchar (100),
	"skill_6" varchar (100),
	"description" varchar (2000),
	"alignment" varchar (20),
	"ideals" varchar (100),
	"flaws" varchar (100),
	"weapon" varchar,
	"inventory" varchar,
	"hit_point_max" int default 0 NOT NULL
);

-- Races Table
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

INSERT INTO "races" ("name", "size", "speed", "feats_id_1", "feats_id_2", "feats_id_3", "feats_id_4", "language_id_1", "language_id_2")
VALUES ('Halfling', 'Small', '25 ft', 1, 2, 3, 4, 1, 2);

INSERT INTO "races" ("name", "size", "speed", "language_id_1")
VALUES ('Human', 'Medium', '30 ft', 1);

INSERT INTO "races" ("name", "size", "speed", "feats_id_1", "feats_id_2", "feats_id_3", "language_id_1", "language_id_2")
VALUES ('Tiefling', 'Medium', '30 ft', 5, 6, 7, 1, 4);

INSERT INTO "races" ("name", "size", "speed", "feats_id_1", "feats_id_2", "feats_id_3", "feats_id_4", "language_id_1", "language_id_2")
VALUES ('Elf', 'Medium', '30 ft', 5, 8, 9, 10, 1, 3);

INSERT INTO "races" ("name", "size", "speed", "feats_id_1", "feats_id_2", "feats_id_3", "feats_id_4", "feats_id_5", "feats_id_6","language_id_1", "language_id_2")
VALUES ('Dwarf', 'Medium', '25 ft', 5, 11, 12, 13, 14, 15, 1, 5);

INSERT INTO "races" ("name", "size", "speed", "feats_id_1", "feats_id_2", "feats_id_3", "feats_id_4", "language_id_1", "language_id_2")
VALUES ('Half-orc', 'Medium', '30 ft', 5, 16, 17, 18, 1, 6);

-- Race Feats Table
CREATE TABLE "race_feats" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL
);

INSERT INTO "race_feats" ("name", "description")
VALUES ('Lucky', 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result, even if it is a 1.'),
('Brave', 'You have advantage on saving throws against being frightened.'),
('Nimble', 'You can move through the space of any creature that is of a size larger than yours.'),
('Lightfoot Halfling: Naturally Stealthy', 'You can attempt to hide even when you are only obscured by a creature that is at least one size larger than you.'),
('Darkvision', 'Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'),
('Hellish Resistance', 'You have resistance to fire damage.'),
('Infernal Legacy', 'You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Hellish Rebuke spell once as a 2nd-level spell. Once you reach 5th level, you can also cast the Darkness spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells.'),
('Fey Ancestry', 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.'),
('Trance', 'Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.'),
('Keen Senses', 'You have proficiency in the Perception skill.'),
('Dwarven REsilience', 'You have advantage on saving throws against poison, and you have resistance against poison damage.'),
('Dwarven Combat Training', 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.'),
('Tool Proficiency', 'You gain proficiency with the artisans tools of your choice: smiths tools, brewers supplies, or masons tools.'),
('Stonecunning', 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'),
('Dwarven Toughness', 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'),
('Menacing', 'You gain proficiency in the Intimidation skill.'),
('Relentless Endurance', 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You cannot use this feature again until you finish a long rest.'),
('Savage Attacks', 'When you score a critical hit with a melee weapon attack, you can roll one of the weapons damage dice one additional time and add it to the extra damage of the critical hit.');

-- Languages
CREATE TABLE "languages" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL
);

INSERT INTO "languages" ("name")
VALUES ('Common'),
('Halfling'),
('Elven'),
('Infernal'),
('Dwarvish'),
('Orc'),
('Draconic');

-- Classes Table
CREATE TABLE "classes" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"hit_dice" varchar NOT NULL,
	"hit_point_base" INT NOT NULL,
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
-- Sorcerer
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "weapon_prof", "feat_id_1", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'Daggers, darts, slings, quarterstaffs, light crossbows', 1, '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 2, 1, 2);
-- Barbarian
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "cantrip_id_5", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4", "spellLv1_id_5")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'N/A', 'N/A', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'N/A', 1, 'N/A', 'N/A', '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 'N/A', 2, 1, 2, 'N/A', 'N/A', 'N/A');
-- Paladin
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "cantrip_id_5", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4", "spellLv1_id_5")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'N/A', 'N/A', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'N/A', 1, 'N/A', 'N/A', '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 'N/A', 2, 1, 2, 'N/A', 'N/A', 'N/A');
-- Ranger
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "cantrip_id_5", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4", "spellLv1_id_5")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'N/A', 'N/A', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'N/A', 1, 'N/A', 'N/A', '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 'N/A', 2, 1, 2, 'N/A', 'N/A', 'N/A');
-- Cleric
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "cantrip_id_5", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4", "spellLv1_id_5")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'N/A', 'N/A', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'N/A', 1, 'N/A', 'N/A', '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 'N/A', 2, 1, 2, 'N/A', 'N/A', 'N/A');
--Rogue
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "cantrip_id_4", "cantrip_id_5", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4", "spellLv1_id_5")
VALUES ('Sorcerer', '1d6', 6, 'Constitution', 'Charisma', 'N/A', 'N/A', 'Daggers, darts, slings, quarterstaffs, light crossbows', 'N/A', 1, 'N/A', 'N/A', '8 + Prof + Cha', 'Charisma', 'Prof + Cha', 4, 3, 4, 5, 6, 'N/A', 2, 1, 2, 'N/A', 'N/A', 'N/A');




