import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function CharacterItem({character, deleteChar}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const routeCharSheet = () => {
    history.push('/character-sheet-stats')
    dispatch({type: 'SET_CHARACTER_ID', payload: character.id})
  }


  return(
    <div>
      <div id="char-item-div" onClick={() => routeCharSheet()}>
        <b>{character.name}</b>
        <br/>
        <sup>{character.race_name} {character.class_name}</sup>
        <br />
        <i><sup>{character.campaign}</sup></i>
      </div>
      <button onClick={() => deleteChar(character.id)}>Delete</button>
    </div>
  )
}

export default CharacterItem;