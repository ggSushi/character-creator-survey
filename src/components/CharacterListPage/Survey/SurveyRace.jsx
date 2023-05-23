import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function SurveyRace() {
  const history = useHistory();
  const dispatch = useDispatch();
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  // raceInfo is DB race info
  const raceInfo = useSelector(store => store.charReducers.raceInfo);
  // charRace is user-selected info on DOM
  const charRace = useSelector(store => store.charReducers.charRace);

  const handleRaceChange = (event) => {
    dispatch({type: 'SET_RACE_TYPE', payload: event.target.value})
    console.log(event.target.value)
  }

  const changeAbilityScores = () => {
    if (charRace === 'human') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES', 
        payload:{
          str_score: abilityScores.str_score + 1,
          dex_score: abilityScores.dex_score + 1,
          con_score: abilityScores.con_score + 1,
          int_score: abilityScores.int_score + 1,
          wis_score: abilityScores.wis_score + 1,
          cha_score: abilityScores.cha_score + 1
        }
      })
    } else if (charRace === 'halfling') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload: {
          dex_score: abilityScores.dex_score + 2,
          cha_score: abilityScores.cha_score + 1
        }
      })
    }

    
  }

  return(
    <>
    What kind of race is your character?
    <br />
    <form >
      <input name="race-select" onClick={handleRaceChange} type="radio" value="human"/> Human
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="halfling"/> Halfling
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="tiefling"/> Tiefling
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="elf"/> Elf
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="dwarf"/> Dwarf
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="half-ord"/> Half-Orc
    </form>
    {JSON.stringify(abilityScores)}
    {JSON.stringify(charRace)}
    <button onClick={changeAbilityScores} >change score test</button>


    </>
  )
}

export default SurveyRace;