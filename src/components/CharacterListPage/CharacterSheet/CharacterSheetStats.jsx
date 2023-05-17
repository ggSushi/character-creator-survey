import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function CharacterSheetStats() {
  const dispatch = useDispatch();
  const characterList = useSelector(store => store.characterList)

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({type: 'FETCH_CHARACTERS'})
    console.log(`GET Character info: ${characterList.data}`);
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