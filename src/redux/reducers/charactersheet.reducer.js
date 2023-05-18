import {combineReducers} from 'redux';

const characterList = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return action.payload;
    default:
      return state;
  }
};

const spellInfo = (state =[], action) => {
  switch (action.type) {
    case 'SET_SPELL_INFO':
      return action.payload;
    default:
      return state
  }
}

const charReducers = combineReducers({
  spellInfo,
  characterList,
});

export default charReducers;