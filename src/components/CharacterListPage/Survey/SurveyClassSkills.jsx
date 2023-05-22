import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';

let skillCounter = 0;

function SurveyClassSkills() {
  const history = useHistory();
  const dispatch = useDispatch();
  const charClass = useSelector(store => store.charReducers.charClass);
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  const skillBonus = useSelector(store => store.charReducers.skillBonus);
  let [skillAmount, setSkillAmount] = useState(2);


  //* all proficiency options for available classes
  const sorcererSkills =[
    {
      id: 1,
      name: 'Arcana',
      description: 'Knowledgable in the nature of magic.'
    },
    {
      id: 2,
      name: 'Deception',
      description: 'Tricking your way through many a situation.'
    },
    {
      id: 3,
      name: 'Insight',
      description: `Telling a person's true intentions.`
    },
    {
      id: 4,
      name: `Intimidation`,
      description: `Really scaring the pants off of people.`
    },
    {
      id: 5,
      name: `Persuasion`,
      description: `Knowing how to get on someone's good side.`
    },
    {
      id: 6,
      name: `Religion`,
      description: `Knowledgable in the theology of the world you're in.`
    }
  ]



  // end skill proficiencies


  const setClassSkills = (event) => {
    skillCounter += 1;
    if (skillCounter <= skillAmount) {
      dispatch({ type: 'SET_SKILL_PROF', payload: event.target.value });
    } else {
      alert(`Please choose only ${skillAmount} of skills.`);
      skillCounter = 0;
      return;
    }
  }


  return (
    <>
      Which of these skills is your character good at?
      {
        charClass === 'sorcerer-1' ? (
          <div>
            <u>Please choose {skillAmount} from the following:</u>
            <form>
              {
                sorcererSkills.map(skill => (
                  <div key={skill.id}>
                    <input name="skill-prof-class"  type="checkbox" onChange={setClassSkills} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
                  </div>
                ))
              }
              <input type="submit" value="Next Page" />
            </form>
          </div>
        ) : (
          <b>Yo</b>
        )
      }
    </>
  )
}

export default SurveyClassSkills;