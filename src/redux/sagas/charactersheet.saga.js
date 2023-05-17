
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchCharacters() {
  try {
    const allCharacters = yield axios.get('/api/characters');
    yield put({ type: 'SET_CHARACTERS', payload: allCharacters.data});
  } catch (error) {
    console.log(`Error in fetchCharacters.`)
    alert(`Something went wrong.`)
  }
}

function* charactersSaga() {
  yield takeLatest('FETCH_CHARACTERS', fetchCharacters);
}

export default charactersSaga;