const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// TODO GET Requests
//* CharacterList base GET Request
router.get('/', (req, res) => {

  if (req.isAuthenticated()) {
    console.log(`req.user: ${req.user}`)
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
    // TODO: change the 1 in the input into USER ID
    pool.query(queryText, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      }).catch(error => {
        console.log(`ERROR in GET character: ${error}`);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
}); // end GET characterList

//* Specific character info
router.get('/character-info/:id', (req, res) => {
  const queryText = `
    Select "character".*, 
    "races"."name" as "race_name", 
    "classes"."name" as "class_name"
    from "character"
    JOIN "user" ON "user"."id" = "character"."user_id"
    JOIN "races" ON "races"."id" = "character"."race_id"
    JOIN "classes" ON "classes"."id" = "character"."class_id"
    WHERE "character"."id" = $1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET character: ${error}`);
      res.sendStatus(500);
    })
})

//* selecting from ALL races
router.get(`/all-race/:race`, (req,res) => {
  const queryText = `SELECT * FROM "races" where "name" = $1;`;
  pool.query(queryText, [req.params.race]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`ERROR in race-info GET: ${error}`);
    res.sendStatus(500);
  })
})

//* Spellcasting GET Request
router.get('/spellcasting/:id', (req, res) => {
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
    JOIN "character" ON "character"."class_id" = "classes"."id"
    WHERE "character"."id" = $1 ORDER BY "level";`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch(error => {
      console.log(`ERROR in GET spellcasting: ${error}`);
      res.sendStatus(500);
    })
}); // end GET spellcasting

//* Class-info@id GET Request
router.get('/class-info/:id', (req, res) => {
  const queryText = `
  Select "classes"."name" as "class_name", 
  "classes"."id" as "class_id",
  "classes"."hit_dice", "classes"."hit_point_base",
  "classes"."save_prof_1", "classes"."save_prof_2",
  "classes"."armor_prof", "classes"."tool_prof",
  "classes"."tool_prof", "classes"."weapon_prof", "classes"."equipment"
  FROM "classes"
  JOIN "character" ON "character"."class_id" = "classes"."id"
  WHERE "character"."id" = $1`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(`Error in GET class-info: ${error}`);
      res.sendStatus(500);
    })
}); // end Class-info@idGET Request

//* Class-info from ALL
router.get('/all-class/:class', (req,res) => {
  const queryText = `SELECT * FROM "classes" where "name" = $1;`;
  pool.query(queryText, [req.params.class]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`ERROR in class-info GET: ${error}`);
    res.sendStatus(500);
  })
})

//* Race Languages GET Request
router.get('/languages/:id', (req, res) => {
  const queryText = `
  Select "languages".* from "languages"
  JOIN "races" ON "languages"."id" = "races"."language_id_1"
  OR "languages"."id" = "races"."language_id_2"
  JOIN "character" ON "character"."race_id" = "races"."id"
  WHERE "character"."id" = $1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(`Error in GET languages: ${error}`);
      res.sendStatus(500);
    })
}); // end Languages GET Request

//* Racial Feats GET Request
router.get('/race-feats/:id', (req, res) => {
  const queryText = `
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
    WHERE "character"."id" = $1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(`Error in GET race-feats: ${error}`);
      res.sendStatus(500);
    })
}); // end race-feats GET Request

// TODO POST Requests
router.post('/', async (req, res) => {
  const db = await pool.connect();
  console.log(`req.body:` , req.body);
  try {
    //? When deconstructing the req.body, 
    //? it turns all of the properties of req.body into usable 
    //? variables. It will show that they are unused initially. - gd
    const {
      abilityScores,
      abilityMods,
      characterName,
      campaignName,
      charRace,
      charClass,
      skillBonus,
      raceId,
      classId,
      hitPointMax,
      user
    } = req.body;
    await db.query('BEGIN')
    console.log(abilityScores)
    const scoreValues = Object.values(abilityScores);
    const charInsertResults = await db.query(`
    INSERT INTO "character" ("user_id", "name", "campaign", 
    "race_id", "class_id", "str_score", "dex_score", "con_score", 
    "int_score", "wis_score", "cha_score", "hit_point_max",
    "str_mod", "dex_mod", "con_mod", "int_mod", "wis_mod", "cha_mod",
    "skill_1", "skill_2", "skill_3", "skill_4", "skill_5", "skill_6")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18 , $19, $20, $21, $22, $23, $24) RETURNING "id";
    `, 
    [user.id, characterName, campaignName, raceId, classId, 
    scoreValues[0], scoreValues[1], scoreValues[2], 
    scoreValues[3], scoreValues[4], scoreValues[5], hitPointMax,
    abilityMods[0], abilityMods[1], abilityMods[2], 
    abilityMods[3], abilityMods[4], abilityMods[5],
    skillBonus[0], skillBonus[1], skillBonus[2], skillBonus[3], skillBonus[4], skillBonus[5]
    ]);
    console.log(`charresbby`, charInsertResults.rows)
    const charId = charInsertResults.rows

    await db.query('COMMIT');
    res.send(charId);

  } catch (error) {
    await db.query('ROLLBACK');
    console.log(`Error in POST:`, error);
    res.sendStatus(500);
  } finally {
    db.release();
  }
});


// TODO PUT Requests
router.put('/character-info/:id', (req, res) => {
  console.log(`in PUT`)
  let putInfo = req.body
  let queryText = `
    UPDATE "character" set "description" = $1, 
    "alignment" = $2, 
    "ideals" = $3, 
    "flaws" = $4 where "id" = $5 RETURNING "description", "alignment", "ideals", "flaws";`;
  
  pool.query(queryText, [putInfo.charDesc, putInfo.align, putInfo.ideals, putInfo.flaws, req.params.id])
    .then((result) => {
      //* The result variable above is going to be the RETURNING information from the query request.
      res.send(result.rows);
    }).catch((error) => {
      res.sendStatus(500);
    })
})



// TODO DELETE Requests
router.delete('/:id', (req, res) => {
  let queryText = `
    DELETE FROM "character" where "id" = $1;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.sendStatus(200)
  }).catch((error) => {
    console.log(`Error in Delete: ${error}`);
    res.sendStatus(500);
  })
})


module.exports = router;
