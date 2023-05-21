import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react'

 const allAbilityScores = {
    score1: 15,
    score2: 14,
    score3: 13,
    score4: 12,
    score5: 10,
    score6: 8
  }

function SurveyClass() {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const charClass = useSelector(store => store.charReducers.charClass)

 

  const nextPage = (event) => {
    event.preventDefault();
    history.push('/survey-page-3');
  }

  const handleClassChange = (event) => {
    dispatch({ type: 'SET_CLASS_TYPE', payload: event.target.value})
    console.log(charClass)
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