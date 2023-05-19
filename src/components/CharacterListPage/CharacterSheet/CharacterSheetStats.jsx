import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function CharacterSheetStats() {
  const dispatch = useDispatch();
  const characterInfo = useSelector(store => store.charReducers.characterInfo);
  const classInfo = useSelector(store => store.charReducers.classInfo);
  const raceInfo = useSelector(store => store.charReducers.raceInfo);
  const languages = useSelector(store => store.charReducers.languages);
  const charId = useSelector(store => store.charReducers.characterId);

  //* Make GET request for User's characters
  const getCharInfo = () => {
    console.log(`charId stats page`,charId)
    dispatch({ type: 'FETCH_CHAR_INFO', payload: charId})
  }

  //* GET languages known
  const getLanguages = () => {
    dispatch({ type: 'FETCH_LANGUAGES', payload: charId})
  }

  //* GET class info
  const getRaceInfo = () => {
    dispatch({ type: 'FETCH_CLASS_INFO', payload: charId})
  }

  //* GET race info
  const getClassInfo = () => {
    dispatch({ type: 'FETCH_RACE_INFO', payload: charId})
  }

  useEffect(() => {
    getCharInfo();
    getLanguages();
    getRaceInfo();
    getClassInfo();
    // console.log(charId);
  }, [])

  return (
    <>
      This is the character sheet: stats Page

      {JSON.stringify(characterInfo)}
      {JSON.stringify(languages)}
      {JSON.stringify(classInfo)}
      {JSON.stringify(raceInfo)}

    </>
  )
}

export default CharacterSheetStats;