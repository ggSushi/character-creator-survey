import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react'


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
      history.push('/survey-page-3');
    }
  }

  const handleClassChange = (event) => {
    dispatch({ type: 'SET_CLASS_TYPE', payload: event.target.value});
    classSelect(event);
  }

  const classSelect = (event) => {
    if (event.target.value === 'sorcerer-1') {
      console.log(`sorcerer`)
      const abilityScores = {
        str_score: 8,
        dex_score: 10,
        con_score: 14,
        int_score: 12,
        wis_score: 13,
        cha_score: 15
      }
      console.log(`Str score: ${abilityScores.str_score}`);

    } else if (event.target.value === 'barbarian-2') {
      console.log(`barb`)
      const abilityScores = {
        str_score: 15,
        dex_score: 13,
        con_score: 14,
        int_score: 10,
        wis_score: 12,
        cha_score: 8
      }
      console.log(`Str score: ${abilityScores.str_score}`);

    } else if (event.target.value === 'paladin-3') {
      console.log(`paladin`)
      const abilityScores = {
        str_score: 13,
        dex_score: 8,
        con_score: 15,
        int_score: 10,
        wis_score: 12,
        cha_score: 14
      }
      console.log(`Str score: ${abilityScores.str_score}`);
    } else if (event.target.value === 'ranger-4') {
      console.log(`ranger`)
      const abilityScores = {
        str_score: 10,
        dex_score: 15,
        con_score: 12,
        int_score: 13,
        wis_score: 14,
        cha_score: 8
      }
      console.log(`Str score: ${abilityScores.str_score}`);
    } else if (event.target.value === 'cleric-5') {
      console.log(`cleric`)
      const abilityScores = {
        str_score: 14,
        dex_score: 8,
        con_score: 12,
        int_score: 13,
        wis_score: 15,
        cha_score: 10
      }
      console.log(`Str score: ${abilityScores.str_score}`);
    } else if (event.target.value === 'rogue-6') {
      console.log(`rogue`)
      const abilityScores = {
        str_score: 8,
        dex_score: 15,
        con_score: 10,
        int_score: 14,
        wis_score: 13,
        cha_score: 12
      }
      console.log(`Str score: ${abilityScores.str_score}`);
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
    <input name="class-select" onClick={handleClassChange} type="radio" value="sorcerer-1"/> 
    An offensive Spellcaster skilled with wild magic.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="barbarian-2"/> 
    Likes to rush in, fighting toe-to-toe with a fiery Rage.
    <br/>
    <input name="class-select" onClick={handleClassChange} type="radio" value="paladin-3"/> 
    Skilled in defensive maneuvers with an aptitude for healing.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="ranger-4"/> 
    Natural Survivalist skills with a keen sniper's eye.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="cleric-5"/> 
    Skillful Healing Magic at it's most efficient.
    <br />
    <input name="class-select" onClick={handleClassChange} type="radio" value="rogue-6"/> 
    Swift feet, deft hands, and a sly personality.
    <br />
    <input type="submit" value="Next Page"/>
    </form>
    </>
  )
}

export default SurveyClass;