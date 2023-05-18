import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function CharacterSheetStats() {
  const dispatch = useDispatch();
  const characterList = useSelector(store => store.charReducers.characterList)
  const languages = useSelector(store => store.charReducers.languages);

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({ type: 'FETCH_CHARACTERS' })
  }

  const getLanguages = () => {
    dispatch({ type: 'FETCH_LANGUAGES'})
  }

  useEffect(() => {
    getCharacterList();
    getLanguages();
  }, [])

  return (
    <>
      This is the character sheet: stats Page

      {JSON.stringify(characterList)}
      {JSON.stringify(languages)}

    </>
  )
}

export default CharacterSheetStats;