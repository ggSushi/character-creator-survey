import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function SurveyClass() {
  const history = useHistory();
  const dispatch = useDispatch();
  const charClass = useSelector(store => store.charReducers.charClass);
  
  const nextPage = (event) => {
    event.preventDefault();
    if (charClass === '') {
      alert('Please select one of the options below.');
      return;
    } else {
      history.push('/survey-page-2.1');
    }
  }

  const backPage = () => {
    history.push('/survey-page-1')
  }

  // handles Class value select
  const handleClassChange = (event) => {
    dispatch({ type: 'SET_CLASS_TYPE', payload: event.target.value});
    classSelect(event);
  }

  // handles Ability scores on class value select
  const classSelect = (event) => {
    if (event.target.value === 'Sorcerer') {
      console.log(`sorcerer`)
      const abilityScores = {
        str_score: 8,
        dex_score: 10,
        con_score: 14,
        int_score: 12,
        wis_score: 13,
        cha_score: 15
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else if (event.target.value === 'Barbarian') {
      console.log(`barb`)
      const abilityScores = {
        str_score: 15,
        dex_score: 13,
        con_score: 14,
        int_score: 10,
        wis_score: 12,
        cha_score: 8
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else if (event.target.value === 'Paladin') {
      console.log(`paladin`)
      const abilityScores = {
        str_score: 13,
        dex_score: 8,
        con_score: 15,
        int_score: 10,
        wis_score: 12,
        cha_score: 14
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else if (event.target.value === 'Ranger') {
      console.log(`ranger`)
      const abilityScores = {
        str_score: 10,
        dex_score: 15,
        con_score: 12,
        int_score: 13,
        wis_score: 14,
        cha_score: 8
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else if (event.target.value === 'Cleric') {
      console.log(`cleric`)
      const abilityScores = {
        str_score: 14,
        dex_score: 8,
        con_score: 12,
        int_score: 13,
        wis_score: 15,
        cha_score: 10
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else if (event.target.value === 'Rogue') {
      console.log(`rogue`)
      const abilityScores = {
        str_score: 8,
        dex_score: 15,
        con_score: 10,
        int_score: 14,
        wis_score: 13,
        cha_score: 12
      }
      dispatch({ type: 'SET_ABILITY_SCORES', payload: abilityScores})

    } else {
      alert(`No class value selected.`);
      return;
    }
  }

  return(
    <>
    Which of these best describes your character?
    <br/>
    <form onSubmit={nextPage}>
    <input name="class-select" onClick={handleClassChange} type="radio" value="Sorcerer"/> 
    An offensive Spellcaster skilled with wild magic.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="Barbarian"/> 
    Likes to rush in, fighting toe-to-toe with a fiery Rage.
    <br/>
    <input name="class-select" onClick={handleClassChange} type="radio" value="Paladin"/> 
    Skilled in defensive maneuvers with an aptitude for healing.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="Ranger"/> 
    Natural Survivalist skills with a keen sniper's eye.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="Cleric"/> 
    Skillful Healing Magic at it's most efficient.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="Rogue"/> 
    Swift feet, deft hands, and a sly personality.
    <br />
    <input type="submit" value="Next Page"/>
    </form>
    <button onClick={backPage} >Back</button>
    </>
  )
}

export default SurveyClass;