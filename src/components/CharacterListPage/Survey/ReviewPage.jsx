import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SurveyReview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  const characterName = useSelector(store => store.charReducers.characterName);
  const campaignName = useSelector(store => store.charReducers.campaignName);
  const charRace = useSelector(store => store.charReducers.charRace);
  const charClass = useSelector(store => store.charReducers.charClass);
  const skillBonus = useSelector(store => store.charReducers.skillBonus);


  const calculateMods = () => {
    // Object.values(object) will take the object key values and put them in an array.
    const abilities = Object.values(abilityScores)
    const modsArray = [];
    console.log(abilities)
    for (let score of abilities) {
      if (score === 1) {
        modsArray.push(-5)
      } else if (score === 2 || score === 3) {
        modsArray.push(-4)
      } else if (score === 4 || score === 5) {
        modsArray.push(-3)
      } else if (score === 6 || score === 7) {
        modsArray.push(-2)
      } else if (score === 8 || score === 9) {
        modsArray.push(-1)
      } else if (score === 10 || score === 11) {
        modsArray.push(0)
      } else if (score === 12 || score === 13) {
        modsArray.push(1)
      } else if (score === 14 || score === 15) {
        modsArray.push(2)
      } else if (score === 16 || score === 17) {
        modsArray.push(3)
      } else if (score === 18 || score === 19) {
        modsArray.push(4)
      } else if (score === 20) {
        modsArray.push(5)
      } 
    }
    console.log(`modsArray: ${modsArray}` , `user.id: ${user.id}`)
    dispatch({type: 'SET_ABILITY_MODS', payload: modsArray})
  }


  //TODO: Write code to clear all forms once character is submitted.


  //TODO: Write POST Request

  return (
    <>
      Here's what we have for you so far:
      <div>
        <u>Name:</u> {characterName}, the {charRace} {charClass}
        <br />
        <u>Campaign Name:</u> {campaignName}
        <br />
        <u>Proficient Skills:</u> {skillBonus.join(', ')}
      </div>
      <div>
        Strength Score: {abilityScores.str_score}
        <br />
        Dexterity Score: {abilityScores.dex_score}
        <br />
        Constitution Score: {abilityScores.con_score}
        <br />
        Intelligence Score: {abilityScores.int_score}
        <br />
        Wisdom Score: {abilityScores.wis_score}
        <br />
        Charisma Score: {abilityScores.cha_score}
      </div>
      <button onClick={calculateMods} >calculate mods test</button>
    </>
  )
}

export default SurveyReview;