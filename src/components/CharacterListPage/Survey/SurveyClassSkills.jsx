import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SurveyClassSkills() {
  const history = useHistory();
  const dispatch = useDispatch();
  const charClass = useSelector(store => store.charReducers.charClass);
  const skillBonus = useSelector(store => store.charReducers.skillBonus);
  const [skillCounter, setSkillCounter] = useState(0);
  let [skillAmount, setSkillAmount] = useState(0);

  const checkClass = () => {
    if (charClass === 'Rogue') {
      setSkillAmount(4);
    } else {
      setSkillAmount(2);
    }
  };

  useEffect(() => {
    checkClass();
  }, [])

  //* all proficiency arrays for available classes
  //TODO: Sorcerer Skills
  const sorcererSkills = [
    {
      id: 1,
      name: 'Arcana',
      description: 'Knowledgeable in the nature of magic.'
    },
    {
      id: 2,
      name: 'Deception',
      description: 'Tricking your way through many a situation.'
    },
    {
      id: 3,
      name: 'Insight',
      description: `Telling a person's feelings or true intentions.`
    },
    {
      id: 4,
      name: `Intimidation`,
      description: `Really scaring people into getting your way.`
    },
    {
      id: 5,
      name: `Persuasion`,
      description: `Knowing how to get on someone's good side.`
    },
    {
      id: 6,
      name: `Religion`,
      description: `Knowledgeable in the theology of the world you're in.`
    }
  ] // end sorcerer skills

  //TODO: Barbarian Skills
  const barbarianSkills = [
    {
      id: 1,
      name: 'Animal Handling',
      description: `Able to befriend or understand the intent of an animal.`
    },
    {
      id: 2,
      name: 'Athletics',
      description: `Efficient with their physical strength.`
    },
    {
      id: 3,
      name: `Intimidation`,
      description: `Really scaring people into getting your way.`
    },
    {
      id: 4,
      name: `Nature`,
      description: `Knows info about terrain, weather cycles, plants and animals.`
    },
    {
      id: 5,
      name: `Perception`,
      description: `Ability to detect the presence of something around you.`
    },
    {
      id: 6,
      name: `Survival`,
      description: `Adept in tracking & hunting, and avoiding natural hazards.`
    }
  ] // end barbarian skills

  //TODO: Paladin skills
  const paladinSkills = [
    {
      id: 1,
      name: 'Athletics',
      description: `Efficient with their physical strength.`
    },
    {
      id: 2,
      name: 'Insight',
      description: `Telling a person's feelings or true intentions.`
    },
    {
      id: 3,
      name: `Intimidation`,
      description: `Really scaring people into getting your way.`
    },
    {
      id: 4,
      name: `Medicine`,
      description: `Able to diagnose illnesses and stabilize a dying person.`
    },
    {
      id: 5,
      name: `Persuasion`,
      description: `Knowing how to get on someone's good side.`
    },
    {
      id: 6,
      name: `Religion`,
      description: `Knowledgeable in the theology of the world you're in.`
    }
  ] // end paladin skills

  //TODO: Ranger skills
  const rangerSkills = [
    {
      id: 1,
      name: 'Animal Handling',
      description: `Able to befriend or understand the intent of an animal.`
    },
    {
      id: 2,
      name: 'Athletics',
      description: `Efficient with their physical strength.`
    },
    {
      id: 3,
      name: 'Insight',
      description: `Telling a person's feelings or true intentions.`
    },
    {
      id: 4,
      name: 'Investigation',
      description: `Skilled in finding hidden objects or finding clues.`
    },
    {
      id: 5,
      name: `Nature`,
      description: `Knows info about terrain, weather cycles, plants and animals.`
    },
    {
      id: 6,
      name: `Perception`,
      description: `Ability to detect the presence of something around you.`
    },
    {
      id: 7,
      name: `Stealth`,
      description: `Ability to sneak past people or conceal themselves.`
    },
    {
      id: 8,
      name: `Survival`,
      description: `Adept in tracking & hunting, and avoiding natural hazards.`
    }
  ] // end ranger skills

  //TODO: Cleric skills
  const clericSkills = [
    {
      id: 1,
      name: 'History',
      description: `Studied in historical events, people, and civilizations.`
    },
    {
      id: 2,
      name: 'Insight',
      description: `Telling a person's feelings or true intentions.`
    },
    {
      id: 3,
      name: `Medicine`,
      description: `Able to diagnose illnesses and stabilize a dying person.`
    },
    {
      id: 4,
      name: `Persuasion`,
      description: `Knowing how to get on someone's good side.`
    },
    {
      id: 5,
      name: `Religion`,
      description: `Knowledgeable in the theology of the world you're in.`
    }
  ] // end cleric skills

  //TODO: Rogue skills
  const rogueSkills = [
    {
      id: 1,
      name: 'Acrobatics',
      description: `Light on their feet and highly dextrous.`
    },
    {
      id: 2,
      name: 'Athletics',
      description: `Efficient with their physical strength.`
    },
    {
      id: 3,
      name: 'Deception',
      description: 'Tricking your way through many a situation.'
    },
    {
      id: 4,
      name: 'Insight',
      description: `Telling a person's feelings or true intentions.`
    },
    {
      id: 5,
      name: `Intimidation`,
      description: `Really scaring people into getting your way.`
    },
    {
      id: 6,
      name: 'Investigation',
      description: `Skilled in finding hidden objects or finding clues.`
    },
    {
      id: 7,
      name: `Perception`,
      description: `Ability to detect the presence of something around you.`
    },
    {
      id: 8,
      name: `Performance`,
      description: `Entertaining with music, dancing, or other performing arts!`
    },
    {
      id: 9,
      name: `Persuasion`,
      description: `Able to sweet-talk your way to someone's good side.`
    },
    {
      id: 10,
      name: `Sleight of Hand`,
      description: `Quick and dextrous hands to secretly take or manipulate things.`
    },
    {
      id: 11,
      name: `Stealth`,
      description: `Ability to sneak past people or conceal themselves.`
    }
  ] // end rogue skills
  // end all skill proficiencies

  const checkHandler = (event) => {
    let {value, checked} = event.target;
    if (checked) {
      if (skillCounter >= skillAmount) {
        alert(`Please choose only ${skillAmount} of skills.`);
        event.target.checked = false;
      } else {
        setSkillCounter(prev => prev + 1);
        dispatch({type: 'SET_SKILL_PROF', payload: value});
        return;
      }
    } else {
      setSkillCounter(prev => prev - 1);
      dispatch({ type: 'REMOVE_SKILL_PROF', payload: value});
      event.target.checked = false;
    }
  }
  
  const nextPage = (event) => {
    event.preventDefault();
    history.push('/survey-page-3')
  }

  const backPage = () => {
    history.push('/survey-page-2')
    dispatch({type: 'CLEAR_SKILLS'})
  }

  return (
    <>
      Which of these skills is your character good at?
      {JSON.stringify(skillBonus)}
      {
        charClass === 'Sorcerer' ? (
          <div>
            <u>Please choose {skillAmount} from the following:</u>
            <form onSubmit={nextPage} >
              {
                sorcererSkills.map(skill => (
                  <div key={skill.id}>
                    <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                  </div>
                ))
              }
              <input type="submit" value="Next Page" />
            </form>
          </div>
        ) : charClass === 'Barbarian' ? (
          <div>
          <u>Please choose {skillAmount} from the following:</u>
          <form onSubmit={nextPage} >
            {
              barbarianSkills.map(skill => (
                <div key={skill.id}>
                  <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                </div>
              ))
            }
            <input type="submit" value="Next Page" />
          </form>
        </div>
        ) : charClass === 'Paladin' ? (
          <div>
          <u>Please choose {skillAmount} from the following:</u>
          <form onSubmit={nextPage} >
            {
              paladinSkills.map(skill => (
                <div key={skill.id}>
                  <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                </div>
              ))
            }
            <input type="submit" value="Next Page" />
          </form>
        </div>
        ) : charClass === 'Ranger' ? (
          <div>
          <u>Please choose {skillAmount} from the following:</u>
          <form onSubmit={nextPage} >
            {
              rangerSkills.map(skill => (
                <div key={skill.id}>
                  <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                </div>
              ))
            }
            <input type="submit" value="Next Page" />
          </form>
        </div>
        ) : charClass === 'Cleric' ? (
          <div>
          <u>Please choose {skillAmount} from the following:</u>
          <form onSubmit={nextPage} >
            {
              clericSkills.map(skill => (
                <div key={skill.id}>
                  <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                </div>
              ))
            }
            <input type="submit" value="Next Page" />
          </form>
        </div>
        ) : charClass === 'Rogue' ? (
          <div>
          <u>Please choose {skillAmount} from the following:</u>
          <form onSubmit={nextPage} >
            {
              rogueSkills.map(skill => (
                <div key={skill.id}>
                  <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={checkHandler} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                </div>
              ))
            }
            <input type="submit" value="Next Page" />
          </form>
        </div>
        ) : (
          <h3>Please restart the survey.</h3>
        )
      }
      <button onClick={backPage} >Back</button>
    </>
  )
}

export default SurveyClassSkills;