import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import CharacterItem from './CharacterItem.jsx';
import axios from 'axios';

function CharacterListPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const characterList = useSelector(store => store.charReducers.characterList);

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({type: 'FETCH_CHARACTERS'})
  }

  const deleteChar = (id) => {
    axios.delete(`/api/characters/${id}`).then((result) => {
      getCharacterList();
    }).catch((error) => {
      console.log(`Error in axios.delete: ${error}`);
      alert(`That's a no from me, dawg.`);
    })
  }

  useEffect(() => {
    getCharacterList();
  },[])
  
  return (
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p> */}
      <h3>My Characters</h3>
      <button >New Character</button>
      <div className="characterListDiv">
      {
        characterList.map(character => (
          <CharacterItem 
            key={character.id}
            character={character}
            getCharacterList={getCharacterList}
            deleteChar={deleteChar}
          />
        ))
      }
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default CharacterListPage;
