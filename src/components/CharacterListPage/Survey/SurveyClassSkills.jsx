import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

function SurveyClassSkills() {
  const history = useHistory();
  const dispatch = useDispatch();
  const charClass = useSelector(store => store.charReducers.charClass);
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  const skillBonus = useSelector(store => store.charReducers.skillBonus);
  let [skillAmount, setSkillAmount] = useState(2);


  const setClassSkills = (event) => {
    console.log(`skillAmount: ${skillAmount}`);
    console.log(`skillBonus: ${skillBonus.length}`);
    console.log(event.target.value);
    if (skillBonus.length <= skillAmount - 1) {
      dispatch({type: 'SET_SKILL_PROF', payload: event.target.value});
    } else {
            alert(`Please choose only ${skillAmount} of skills.`);
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
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="arcana" /> Arcana - Knowledgable in the nature of magic.
              <br />
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="deception" /> Deception - Tricking your way through many a situation.
              <br />
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="insight" /> Insight - Telling a person's true intentions.
              <br />
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="intimidation" /> Intimidation - Really scaring the pants off of people.
              <br />
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="persuasion" /> Persuasion - Knowing how to get on someone's good side.
              <br />
              <input name="skill-prof-class" type="checkbox" onChange={setClassSkills} value="religion" /> Religion - Knowledgable in the theology of the world you're in.
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