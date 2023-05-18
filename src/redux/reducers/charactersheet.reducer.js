import {combineReducers} from 'redux';

const characterList = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return action.payload;
    default:
      return state;
  }
};

const spellInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_SPELL_INFO':
      return action.payload;
    default:
      return state;
  }
}

const raceInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_RACE_INFO':
      return action.payload;
    default:
      return state;
  }
}

const languages = (state = [], action) => {
  switch (action.type) {
    case 'SET_LANGUAGES':
      return action.payload;
    default:
      return state;
  }
}

const classInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLASS_INFO':
      return action.payload;
    default:
      return state;
  }
}

//* This is the combineReducer that gets exported
const charReducers = combineReducers({
  spellInfo,
  characterList,
  raceInfo,
  languages,
  classInfo,

});

export default charReducers;