import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SurveyReview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const abilityScores = useSelector(store => store.charReducers.abilityScores);
  const characterName = useSelector(store => store.charReducers.characterName);
  const campaignName = useSelector(store => store.charReducers.campaignName);
  const charRace = useSelector(store => store.charReducers.charRace);
  const charClass = useSelector(store => store.charReducers.charClass);
  const skillBonus = useSelector(store => store.charReducers.skillBonus);


  return (
    <>
      Here's what we have for you so far:
      <div>
        <u>Name:</u> {characterName}, {charRace} {charClass}
        <br />
        <u>Campaign Name:</u> {campaignName}
        <br />
        <u>Proficient Skills:</u> {skillBonus.join(', ')}
        
      </div>
      <div>
        Strength Score: {abilityScores.str_score}
        <br />
        Dexterity Score: {abilityScores.dex_score}
        <br />
        Constitution Score: {abilityScores.con_score}
        <br />
        Intelligence Score: {abilityScores.int_score}
        <br />
        Wisdom Score: {abilityScores.wis_score}
        <br />
        Charisma Score: {abilityScores.cha_score}
      </div>
    </>
  )
}

export default SurveyReview;