import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CharNav from './CharacterNav.jsx'

function CharacterSheetDescription() {
  const dispatch = useDispatch();
  const characterInfo = useSelector(store => store.charReducers.characterInfo);
  const charId = useSelector(store => store.charReducers.characterId);

  const getCharInfo = () => {
    dispatch({ type: 'FETCH_CHAR_INFO', payload: charId})
  }

  useEffect(() => {
    getCharInfo();
  }, [])


  return(
    <>
    <CharNav />
    Describe yoself
    {JSON.stringify(characterInfo)}
    </>
  )
}

export default CharacterSheetDescription;