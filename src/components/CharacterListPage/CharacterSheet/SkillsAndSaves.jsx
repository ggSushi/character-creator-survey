import SkillItems from './SkillItems.jsx';
import { useDispatch, useSelector } from 'react-redux';

function SkillsAndSaves({classInfo}) {
  const charInfo = useSelector(store => store.charReducers.characterInfo);
  // array of all skills
  const allSkills = [
    {
      name: 'Athletics',
      type: 'Strength'
    },
    {
      name: 'Acrobatics',
      type: 'Dexterity'
    },
    {
      name: 'Sleight of Hand',
      type: 'Dexterity'
    },
    {
      name: 'Stealth',
      type: 'Dexterity'
    },
    {
      name: 'Arcana',
      type: 'Intelligence'
    },
    {
      name: 'History',
      type: 'Intelligence'
    },
    {
      name: 'Nature',
      type: 'Intelligence'
    },
    {
      name: 'Religion',
      type: 'Intelligence'
    },
    {
      name: 'Animal Handling',
      type: 'Wisdom'
    },
    {
      name: 'Insight',
      type: 'Wisdom'
    },    {
      name: 'Medicine',
      type: 'Wisdom'
    },
    {
      name: 'Perception',
      type: 'Wisdom'
    },
    {
      name: 'Survival',
      type: 'Wisdom'
    },
    {
      name: 'Deception',
      type: 'Charisma'
    },
    {
      name: 'Intimidation',
      type: 'Charisma'
    },
    {
      name: 'Performance',
      type: 'Charisma'
    },
    {
      name: 'Persuasion',
      type: 'Charisma'
    }
  ] // end all skills

  let charSkills = []
  const concatSkills = () => {
    charInfo.map(char => charSkills.push(char.skill_1, char.skill_2, char.skill_3, char.skill_4, char.skill_5, char.skill_6))
  }
  console.log(charSkills)

  return (
    <>
      <b>Skill Proficiencies (+ Prof. Bonus):</b>
      <br/>
      {
        charInfo.map(skill => (
          <i>{skill.skill_1}, {skill.skill_2}, {skill.skill_3}, {skill.skill_4}, {skill.skill_5}, {skill.skill_6}</i>
        ))
      }
      <div>
        {
          classInfo.map(info => (
            <div key={info.id}>
              <>
              <b>Saving Throws (+ Prof. Bonus):</b> {info.save_prof_1}, {info.save_prof_2}
              </>
              <div>
                <SkillItems allSkills={allSkills} info={info}/>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SkillsAndSaves;