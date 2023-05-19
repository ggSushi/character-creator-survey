import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function CharacterSheetSpells() {
  const dispatch = useDispatch();
  const spellcasting = useSelector(store => store.charReducers.spellInfo);
  const charId = useSelector(store => store.charReducers.characterId);

  // Calling function to get spellcasting info
  const getSpellInfo = () => {
    dispatch({type: 'FETCH_SPELL_INFO', payload: charId});
  }

  useEffect(() => {
    getSpellInfo();
  }, [])

  return(
    <>
    Put those spells here, my dude.
    {JSON.stringify(spellcasting)}

    </>
  )
}

export default CharacterSheetSpells;