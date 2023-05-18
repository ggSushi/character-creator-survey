import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function CharacterSheetStats() {
  const dispatch = useDispatch();
  const characterList = useSelector(store => store.charReducers.characterList);
  const classInfo = useSelector(store => store.charReducers.classInfo);
  const raceInfo = useSelector(store => store.charReducers.raceInfo);
  const languages = useSelector(store => store.charReducers.languages);

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({ type: 'FETCH_CHARACTERS' })
  }

  //* GET languages known
  const getLanguages = () => {
    dispatch({ type: 'FETCH_LANGUAGES'})
  }

  //* GET class info
  const getRaceInfo = () => {
    dispatch({ type: 'FETCH_CLASS_INFO'})
  }

  //* GET race info
  const getClassInfo = () => {
    dispatch({ type: 'FETCH_RACE_INFO'})
  }

  useEffect(() => {
    getCharacterList();
    getLanguages();
    getRaceInfo();
    getClassInfo();
  }, [])

  return (
    <>
      This is the character sheet: stats Page

      {JSON.stringify(characterList)}
      {JSON.stringify(languages)}
      {JSON.stringify(classInfo)}
      {JSON.stringify(raceInfo)}

    </>
  )
}

export default CharacterSheetStats;