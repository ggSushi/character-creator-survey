import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function SurveyClass() {
  const history = useHistory();
  const dispatch = useDispatch();

  const nextPage = () => {
    history.push('/survey-page-3');
  }

  return(
    <>
    Which of these best describes your character?
    <br/>
    <input type="radio" value="sorcerer-1"/> 
    An offensive Spellcaster skilled with wild magic.
    <br />
    <input type="radio" value="barbarian-2"/> 
    Likes to rush in, fighting toe-to-toe with a fiery Rage.
    <br/>
    <input type="radio" value="paladin-3"/> 
    Skilled in defensive maneuvers with an aptitude for healing.
    <br />
    <input type="radio" value="ranger-4"/> 
    Natural Survivalist skills with a keen sniper's eye.
    <br />
    <input type="radio" value="cleric-5"/> 
    Skillful Healing Magic at it's most efficient.
    <br />
    <input type="radio" value="rogue-6"/> 
    Swift feet, deft hands, and a sly personality.
    <br />
    <button onClick={nextPage}>Next Page</button>
    
    </>
  )
}

export default SurveyClass;