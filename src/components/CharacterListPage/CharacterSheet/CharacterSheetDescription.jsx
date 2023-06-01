import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import CharNav from './CharacterNav.jsx'
import axios from 'axios';

function CharacterSheetDescription() {
  const history = useHistory();
  const dispatch = useDispatch();
  const characterInfo = useSelector(store => store.charReducers.characterInfo);
  const charId = useSelector(store => store.charReducers.characterId);
  const [editStatus, setEditStatus] = useState(false);
  const [charDesc, setCharDesc] = useState(characterInfo[0].description);
  const [align, setAlign] = useState(characterInfo[0].alignment);
  const [ideals, setIdeals] = useState(characterInfo[0].ideals);
  const [flaws, setFlaws] = useState(characterInfo[0].flaws);

  const getCharInfo = () => {
    dispatch({ type: 'FETCH_CHAR_INFO', payload: charId })
  }

  useEffect(() => {
    getCharInfo();
  }, [])

  const handleDescChange = (event) => {
    setCharDesc(event.target.value)
  }

  const handleAlignChange = (event) => {
    setAlign(event.target.value)
  }

  const handleIdealsChange = (event) => {
    setIdeals(event.target.value)
  }

  const handleFlawsChange = (event) => {
    setFlaws(event.target.value)
  }

  const handleStatusChange = () => {
    setEditStatus(!editStatus);
  }

  const handleSubmit = () => {
    axios.put(`/api/characters/character-info/${charId}`,
    {
      charDesc,
      align,
      ideals,
      flaws
    }).then((response) => {
      let resData = response.data;
      setCharDesc(resData.description);
      setAlign(resData.alignment);
      setIdeals(resData.ideals);
      setFlaws(resData.flaws);
      console.log(`resData`, resData.description)
      setEditStatus(!editStatus);
      // TODO: I want to make this change live on the DOM anda ccurately display it.
      history.push('/character-sheet-stats');
    }).catch((error) => {
      alert(`Error in PUT: ${error}`);
    })
  }
  return (
    <>
      <CharNav />
      <button onClick={handleStatusChange}>Edit</button>
      <button onClick={handleSubmit} >Save</button>
      {
        characterInfo.map(info => (
          <div key={info.class_id}>
            <b><u>Description:</u></b>
            <br />
            {
              editStatus === false ? (
                <>{info.description}</>
              ) : (
                <textarea rows="6" cols="40" value={charDesc} onChange={handleDescChange} />
              )
            }
            <br />
            <b><u>Alignment:</u></b>
            <br />
            {
              editStatus === false ? (
                <>{info.alignment}</>
              ) : (
                <input type="text" value={align} onChange={handleAlignChange} />
              )
            }
            <br />
            <b><u>Ideals:</u></b>
            <br />
            {
              editStatus === false ? (
                <>{info.ideals}</>
              ) : (
                <input type="text" value={ideals} onChange={handleIdealsChange} />
              )
            }
            <br />
            <b><u>Flaws:</u></b>
            <br />
            {
              editStatus === false ? (
                <>{info.flaws}</>
              ) : (
                <input type="text" value={flaws} onChange={handleFlawsChange} />
              )
            }
            <br />

          </div>
        ))
      }
    </>
  )
}

export default CharacterSheetDescription;