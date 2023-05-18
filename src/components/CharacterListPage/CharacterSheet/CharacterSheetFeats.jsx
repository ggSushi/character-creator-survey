import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react'
;
function CharacterSheetFeats() {
  const dispatch = useDispatch();
  const raceInfo = useSelector(store => store.charReducers.raceInfo);

  //* Make request for character's race info, 
  //* but only take race feats
  const getRaceFeats = () => {
    dispatch({type: 'FETCH_RACE_INFO'})
  }

  //* Make request for character's class feats



  useEffect(() => {
    getRaceFeats();
  }, [])

  return(
    <>
    These be the Feats, bro
    {JSON.stringify(raceInfo)}

    </>
  )
}

export default CharacterSheetFeats;