import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//TODO Sagas go here
function* fetchCharacters() {
  try {
    const allCharacters = yield axios.get('/api/characters');
    yield put({ type: 'SET_CHARACTERS', payload: allCharacters.data});
  } catch (error) {
    console.log(`Error in fetchCharacters: ${error}`)
    alert(`Something went wrong.`)
  }
};

function* fetchSpellcasting() {
  try {
    const spellcasting = yield axios.get('/api/characters/spellcasting');
    yield put({ type: 'SET_SPELL_INFO', payload: spellcasting.data});
  } catch (error) {
    console.log(`Error in fetchSpellcasting: ${error}`)
    alert(`Something went horribly wrong.`)
  }
};

function* fetchRaceInfo() {
  try {
    const raceInfo = yield axios.get('/api/characters/race-feats');
    yield put({ type: 'SET_RACE_INFO', payload :raceInfo.data});
  } catch (error) {
    console.log(`Error in fetchRaceFeats: ${error}`);
    alert(`Oops, I did it again.`)
  }
}

//* This will be exported
function* charactersSaga() {
  yield takeLatest('FETCH_CHARACTERS', fetchCharacters);
  yield takeLatest('FETCH_SPELL_INFO', fetchSpellcasting);
  yield takeLatest('FETCH_RACE_INFO', fetchRaceInfo);
  
}

export default charactersSaga;