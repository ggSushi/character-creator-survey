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
  const [checkboxValues, setValues] = useState([]);
  let [skillAmount, setSkillAmount] = useState(2);

  //* all proficiency options for available classes
  const sorcererSkills = [
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

  const checkHandler = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      skillCounter += 1;
      if (skillCounter > skillAmount) {
        skillCounter -= 1;
        alert(`Please choose only ${skillAmount} of skills.`);
        return;
      } else {
        setValues(pre => [...pre, value])
      }
    } else {
      skillCounter -= 1;
      setValues(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
    }
    console.log(skillCounter)
    console.log(checkboxValues)
    console.log(event.target.checked)
  };

  const setClassSkills = (event) => {
    checkHandler(event);

  }


  // const setClassSkills = (event) => {

  //   if (skillCounter < skillAmount) {
  //     checkHandler(event);
  //     // dispatch({ type: 'SET_SKILL_PROF', payload: event.target.value });
  //   } else {

  //     alert(`Please choose only ${skillAmount} of skills.`);
  //   }

  // }

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
                    <input id={skill.id} name="skill-prof-class" type="checkbox" onChange={setClassSkills} value={skill.name} /> <b>{skill.name}</b> - {skill.description}
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