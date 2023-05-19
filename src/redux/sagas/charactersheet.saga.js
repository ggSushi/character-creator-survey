import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

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

function* fetchSpellcasting(action) {
  try {
    let id = action.payload;
    const spellcasting = yield axios.get(`/api/characters/spellcasting/${id}`);
    yield put({ type: 'SET_SPELL_INFO', payload: spellcasting.data});
  } catch (error) {
    console.log(`Error in fetchSpellcasting: ${error}`)
    alert(`Something went horribly wrong.`)
  }
};

function* fetchRaceInfo(action) {
  try {
    let id = action.payload;
    const raceInfo = yield axios.get(`/api/characters/race-feats/${id}`);
    yield put({ type: 'SET_RACE_INFO', payload: raceInfo.data});
  } catch (error) {
    console.log(`Error in fetchRaceFeats: ${error}`);
    alert(`Oops, I did it again.`)
  }
}

function* fetchLanguages(action) {
  try {
    let id = action.payload;
    const languages = yield axios.get(`/api/characters/languages/${id}`);
    yield put({ type: 'SET_LANGUAGES', payload: languages.data});
  } catch (error) {
    console.log(`Error in fetch Languages: ${error}`);
    alert('Eh di lagot.')
  }
}

function* fetchClassInfo(action) {
  try {
    let id = action.payload;
    const classInfo = yield axios.get(`/api/characters/class-info/${id}`);
    yield put({ type: 'SET_CLASS_INFO', payload: classInfo.data});
  } catch (error) {
    console.log(`Error in fetchClassInfo: ${error}`);
    alert('I guess I have the wrong class, haha!');
  }
}


function* fetchCharInfo(action) {
  try {
    let id = action.payload;
    console.log(`saga Id: ${id}`);
    const charInfo = yield axios.get(`/api/characters/character-info/${id}`);
    yield put({ type: 'SET_CHAR_INFO', payload: charInfo.data});
  } catch (error) {
    console.log(`Error in fetchCharInfo: ${error}`);
    alert(`Whoopsie daisy!`)
  }
}

//* This will be exported
function* charactersSaga() {
  yield takeEvery('FETCH_CHARACTERS', fetchCharacters);
  yield takeLatest('FETCH_SPELL_INFO', fetchSpellcasting);
  yield takeEvery('FETCH_RACE_INFO', fetchRaceInfo);
  yield takeLatest('FETCH_LANGUAGES', fetchLanguages);
  yield takeLatest('FETCH_CLASS_INFO', fetchClassInfo);
  yield takeEvery('FETCH_CHAR_INFO', fetchCharInfo);

}

export default charactersSaga;