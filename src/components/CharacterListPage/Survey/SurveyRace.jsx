import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function SurveyRace() {
  const history = useHistory();
  const dispatch = useDispatch();
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  // charRace is user-selected info on DOM
  const charRace = useSelector(store => store.charReducers.charRace);


  const handleRaceChange = (event) => {
    dispatch({type: 'SET_RACE_TYPE', payload: event.target.value})
    // console.log(event.target.value)
  }

  //* This code will occur on nextPage
  const changeAbilityScores = () => {
    if (charRace === 'Human') {
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
    } else if (charRace === 'Halfling') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload: {
          dex_score: abilityScores.dex_score + 2,
          cha_score: abilityScores.cha_score + 1
        }
      })
    } else if (charRace === 'Tiefling') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload:{
          int_score: abilityScores.int_score + 1,
          cha_score: abilityScores.cha_score + 2
        }
      })
    } else if (charRace === 'Elf') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload:{
          dex_score: abilityScores.dex_score + 2
        }
      })
    } else if (charRace === 'Dwarf') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload:{
          con_score: abilityScores.con_score + 2,
          wis_score: abilityScores.wis_score + 1
        }
      })
    } else if (charRace === 'Half-orc') {
      dispatch({
        type: 'CHANGE_ABILITY_SCORES',
        payload:{
          str_score: abilityScores.str_score + 2,
          con_score: abilityScores.con_score + 1
        }
      })
    } else {
      alert(`Please select an available race.`)
    }
  }

  const backPage = () => {
    history.push('/survey-page-2.1')
  }

  const nextPage = (event) => {
    event.preventDefault();
    changeAbilityScores();
    history.push('/survey-review')
  }

  return(
    <>
    What kind of race is your character?
    <br />
    <form onSubmit={nextPage} >
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Human"/> 
      Human - Well-rounded beings from the Material Plane.
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Halfling"/> 
      Halfling - Short, swift, and naturally deft beings.
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Tiefling"/> 
      Tiefling - Often solitary and holds great arcane power.
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Elf"/> 
      Elf - Naturally gifted in magic and keen-eyed in the field.
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Dwarf"/> 
      Dwarf - Slightly shorter, but skilled with their tools, and resilient.
      <br />
      <input name="race-select" onClick={handleRaceChange} type="radio" value="Half-orc"/> 
      Half-Orc - Strong beings; eager to achieve greatness through battle.
      <br />
      <input type="submit" value="Review Page"/>
    </form>
    <button onClick={backPage} >Back</button>


    </>
  )
}

export default SurveyRace;