import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'
;
function CharacterSheetFeats() {
  const dispatch = useDispatch();
  const raceInfo = useSelector(store => store.charReducers.raceInfo);
  const classInfo = useSelector(store => store.charReducers.classInfo);
  const charId = useSelector(store => store.charReducers.characterId);

  //* Make request for character's race info, 
  //* but only take race feats
  const getRaceInfo = () => {
    dispatch({type: 'FETCH_RACE_INFO', payload: charId});
  }

  //* Make request for character's class info,
  //* but only take the class feats
  const getClassInfo = () => {
    dispatch({ type: 'FETCH_CLASS_INFO', payload: charId});
  }

  useEffect(() => {
    getRaceInfo();
    getClassInfo();
  }, [])

  return(
    <>
    These be the Feats, bro
    {JSON.stringify(raceInfo)}
    {JSON.stringify(classInfo)}
    
    </>
  )
}

export default CharacterSheetFeats;