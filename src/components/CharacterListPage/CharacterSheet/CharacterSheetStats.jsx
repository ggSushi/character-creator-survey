import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function CharacterSheetStats() {
  const dispatch = useDispatch();
  const characterList = useSelector(store => store.charReducers.characterList)

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({type: 'FETCH_CHARACTERS'})
  }

  useEffect(() => {
    getCharacterList();
  }, [])

  return(
    <>
    This is the character sheet: stats Page

    {JSON.stringify(characterList)}

    </>
  )
}

export default CharacterSheetStats;