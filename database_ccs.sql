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
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "weapon_prof", "feat_id_1", "feat_id_2")
VALUES ('Barbarian', '1d12', 12, 'Strength', 'Constitution', 'Light/medium armor, shields', 'Daggers, darts, slings, quarterstaffs, light crossbows', 2, 3);
-- Paladin
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "weapon_prof", "feat_id_1", "feat_id_2")
VALUES ('Paladin', '1d10', 10, 'Wisdom', 'Charisma', 'All armor, shields', 'Simple, Martial', 4, 5);
-- Ranger
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "weapon_prof", "feat_id_1", "feat_id_2")
VALUES ('Ranger', '1d10', 10, 'Strength', 'Dexterity', 'Light/medium armor, shields', 'Simple, Martial', 6, 7);
-- Cleric
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "weapon_prof", "feat_id_1", "spell_save_dc", "spell_save_name", "spell_atk_mod", "cantrips_known", "cantrip_id_1", "cantrip_id_2", "cantrip_id_3", "spell_lv1_slots", "spellLv1_id_1", "spellLv1_id_2", "spellLv1_id_3", "spellLv1_id_4")
VALUES ('Cleric', '1d8', 8, 'Wisdom', 'Charisma', 'Light/medium armor, shields', 'Simple', 8, '8 + Prof + Wis', 'Wisdom', 'Prof + Wis', 3, 7, 8, 9, 2, 10, 11, 12, 13);
--Rogue
INSERT INTO "classes" ("name", "hit_dice", "hit_point_base", "save_prof_1", "save_prof_2", "armor_prof", "tool_prof", "weapon_prof", "equipment", "feat_id_1", "feat_id_2", "feat_id_3")
VALUES ('Rogue', '1d8', 8, 'Dexterity', 'Intelligence', 'Light armor', 'Thieves Tools', 'Simple, hand crossbows, longswords, rapiers, shortswords', 9, 10, 11);

-- Class Feats Table
CREATE TABLE "class_feats" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL
);

INSERT INTO "class_feats" ("name", "description")
VALUES('Sorcerous Origin: Wild Magic', 'Wild Magic Surge
Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it does not require concentration in this case; the spell lasts for its full duration.

Tides of Chaos
Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.

Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.'),
('Rage', 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.

While raging, you gain the following benefits if you are not wearing heavy armor:

You have advantage on Strength checks and Strength saving throws.
When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.
You have resistance to bludgeoning, piercing, and slashing damage.
If you are able to cast spells, you cannot cast them or concentrate on them while raging.

Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you have not attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.

Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.'),
('Unarmored Defense', 'While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'),
('Divine Sense', 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.

You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.'),
('Lay on Hands', 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.

As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.

Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.

This feature has no effect on undead and constructs.'),
('Favored Enemy', 'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.

You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.

When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.

You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.'),
('Natural Explorer', 'Also at 1st level, you are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

While traveling for an hour or more in your favored terrain, you gain the following benefits:

Difficult terrain doesn’t slow your group’s travel.
Your group can’t become lost except by magical means.
Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
If you are traveling alone, you can move stealthily at a normal pace.
When you forage, you find twice as much food as you normally would.
While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
You choose additional favored terrain types at 6th and 10th level.'),
('Divine Domain: Disciple of Life', 'You gain proficiency with heavy armor and your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spells level.'),
('Expertise', 'At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

At 6th level, you can choose two more of your proficiencies (in skills or with thieves tools) to gain this benefit.'),
('Sneak Attack', 'Beginning at 1st level, you know how to strike subtly and exploit a foes distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

You dont need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isnt incapacitated, and you dont have disadvantage on the attack roll.

The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.'),
('Thieves Cant', 'During your rogue training you learned thieves cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.');

-- Spell List Table
CREATE TABLE "spell_list" (
	"id" Serial Primary Key,
	"name" varchar NOT NULL,
	"level" varchar NOt NULL,
	"description" varchar NOT NULL
);

INSERT INTO "spell_list" ("name", "level", "description")
VALUES
('Silvery Barbs', 'Lv 1', 'Casting Time: 1 reaction, which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw
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
('Lightning Lure', 'Cantrip', 'Casting Time: 1 action
Range: Self (15-foot radius)
Components: V
Duration: Instantaneous

You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.

At Higher Levels, the spell damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).'),
('Fire Bolt', 'Cantrip', 'Casting Time: 1 action
Range: 120 feet
Components: V, S
Duration: Instantaneous

You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.

At Higher Levels, This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).'),
('Minor Illusion', 'Cantrip', 'Casting Time: 1 action
Range: 30 feet
Components: S, M (a bit of fleece)
Duration: 1 minute

You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.

If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.

If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.'),
('Spare the Dying', 'Cantrip', 'Casting Time: 1 action
Range: Touch
Components: V, S
Duration: Instantaneous
You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.'),
('Guidance', 'Cantrip', 'Casting Time: 1 action
Range: Touch
Components: V, S
Duration: Concentration, up to 1 minute
You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.'),
('Sacred Flame', 'Cantrip', 'Casting Time: 1 action
Range: 60 feet
Components: V, S
Duration: Instantaneous
Flame like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.
The spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).'),
('Bless', 'Lv 1', 'Casting Time: 1 action
Range: 30 feet
Components: V, S, M (a sprinkling of holy water)
Duration: Concentration, up to 1 minute
You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.'),
('Cure Wounds', 'Lv 1', 'Casting Time: 1 action
Range: Touch
Components: V, S
Duration: Instantaneous
A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.'),
('Healing Word', 'Lv 1', 'Casting Time: 1 bonus action
Range: 60 feet
Components: V
Duration: Instantaneous
A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.'),
('Inflict Wounds', 'Lv 1', 'Casting Time: 1 action
Range: Touch
Components: V, S
Duration: Instantaneous
Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.');

