import { combineReducers } from 'redux';

// -------- Database reducers ---------- //
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

//* saving Character id
const characterId = (state = '', action) => {
  switch (action.type) {
    case 'SET_CHARACTER_ID':
      return action.payload;
    default:
      return state;
  }
}

//* Saving specific Char info
const characterInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHAR_INFO':
      return action.payload;
    default:
      return state;
  }
}

// ------ User info reducers -------- //
const characterName = (state = '', action) => {
  if (action.type === 'SET_CHARACTER_NAME') {
    return action.payload;
  } else if (action.type === 'CLEAR_NAME_AND_CAMPAIGN') {
    return '';
  }
  return state;
}

const campaignName = (state = '', action) => {
  switch (action.type) {
    case 'SET_CAMPAIGN_NAME':
      return action.payload;
    case 'CLEAR_NAME_AND_CAMPAIGN':
      return '';
    default:
      return state;
  }
}

const charClass = (state = '', action) => {
  switch (action.type) {
    case 'SET_CLASS_TYPE':
      return action.payload;
    default:
      return state;
  }
}

const abilityScores = (state = {
  }, action) => {
  switch (action.type) {
    case 'SET_ABILITY_SCORES':
      return action.payload;
    case 'CHANGE_ABILITY_SCORES':
      //! This line of code will take the existing state and 
      //! update the state with the payload calculations 
      //! without replacing it with the payload.
      return {...state, ...action.payload};
    default:
      return state;
  }
}

const abilityMods = (state = [], action) => {
  switch (action.type) {
    case 'SET_ABILITY_MODS':
      return action.payload;
    default:
      return state;
  }
}

const skillBonus = (state = [], action) => {
  switch (action.type) {
    case 'SET_SKILL_PROF':
      return [...state, action.payload];
    case 'REMOVE_SKILL_PROF':
      return state.filter(skill => skill !== action.payload);
    case 'CLEAR_SKILLS':
      return [];
    default:
      return state;
  }
}

const charRace = (state = '', action) => {
  switch (action.type) {
    case 'SET_RACE_TYPE':
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
  characterId,
  characterInfo,
  characterName,
  campaignName,
  charClass,
  abilityScores,
  skillBonus,
  charRace,
  abilityMods,

});

export default charReducers;