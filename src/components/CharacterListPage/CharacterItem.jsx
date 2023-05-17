import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function CharacterItem() {
  const characterList = useSelector(store => store.characterList)

  return(
    <>

    {JSON.stringify(characterList)}
    
    </>
  )
}

export default CharacterItem;