const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//* Character base GET Request
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `
  Select "character".*, 
  "races"."name" as "race_name", 
  "classes"."name" as "class_name"
  from "character"
  JOIN "user" ON "user"."id" = "character"."user_id"
  JOIN "races" ON "races"."id" = "character"."race_id"
  JOIN "classes" ON "classes"."id" = "character"."class_id"
  WHERE "user"."id" = $1;`;
  // TODO: change the 1 in the input
  pool.query(queryText, [1])
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET character: ${error}`);
      res.sendStatus(500);
    })
}); // end GET character

//* Spellcasting GET Request
router.get('/spellcasting', (req, res) => {
  // GET route code here
  const queryText = `
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
WHERE "classes"."id" = $1 ORDER BY "level";`;
  pool.query(queryText, [1])
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET spellcasting: ${error}`);
      res.sendStatus(500);
    })
}); // end GET spellcasting


//* Class-info GET Request
router.get('/class-info', (req, res) => {
  const queryText = `
  Select "classes"."name" as "class_name", "class_feats".*,
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
  WHERE "character"."id" = $1;`;
  pool.query(queryText, [1])
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error in GET class-info: ${error}`);
    res.sendStatus(500);
  })
}); // end Class-info GET Request






/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
