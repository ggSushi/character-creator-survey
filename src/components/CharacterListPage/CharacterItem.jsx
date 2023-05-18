import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function CharacterItem({character}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const routeCharSheet = () => {
    history.push('/character-sheet-stats')
    dispatch({type: 'SET_CHARACTER_ID', payload: character.id})
  }

  return(
    <div>
      <div onClick={() => routeCharSheet()}>
        <b><u>{character.name}</u></b> {character.id}
        <br/>
        <sup>{character.race_name} {character.class_name}</sup>
        <br />
        <i><sup>{character.campaign}</sup></i>
        <button >Delete</button>
      </div>
    </div>
  )
}

export default CharacterItem;