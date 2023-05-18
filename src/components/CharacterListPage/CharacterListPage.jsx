import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function CharacterListPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const characterList = useSelector(store => store.charReducers.characterList);

  //* Make GET request for User's characters
  const getCharacterList = () => {
    dispatch({type: 'FETCH_CHARACTERS'})
  }

  useEffect(() => {
    getCharacterList();
  },[])
  
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <h3>My Characters</h3>
      
      {JSON.stringify(characterList)}
      
      <button >New Character</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default CharacterListPage;
