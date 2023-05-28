import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CharNav from './CharacterNav.jsx'

function CharacterSheetDescription() {
  const dispatch = useDispatch();
  const characterInfo = useSelector(store => store.charReducers.characterInfo);
  const charId = useSelector(store => store.charReducers.characterId);
  const [editStatus, setEditStatus] = useState(false);

  const getCharInfo = () => {
    dispatch({ type: 'FETCH_CHAR_INFO', payload: charId })
  }

  useEffect(() => {
    getCharInfo();
  }, [])

  const handleDescChange = () => {

  }

  const handleStatusChange = () => {
    setEditStatus(!editStatus);
  }


  return (
    <>
      <CharNav />
      <button onClick={handleStatusChange}>Edit</button>
      <button >Save</button>
      {
        characterInfo.map(info => (
          <>
            <b>Description:</b>
            <br />
            {
              editStatus === false ? (
                <>{info.description}</>
              ) : (
                <textarea rows="10" cols="40" onChange={handleDescChange}/>
              )
            }
            
            
          </>
        ))
      }
    </>
  )
}

export default CharacterSheetDescription;