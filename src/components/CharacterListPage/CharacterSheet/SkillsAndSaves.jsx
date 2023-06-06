import SkillItems from './SkillItems.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function SkillsAndSaves({ classInfo }) {
  const charInfo = useSelector(store => store.charReducers.characterInfo);

  // array of all skills
  const allSkills = [
    {
      id: 1,
      name: 'Athletics',
      type: 'Strength'
    },
    {
      id: 2,
      name: 'Acrobatics',
      type: 'Dexterity'
    },
    {
      id: 3,
      name: 'Sleight of Hand',
      type: 'Dexterity'
    },
    {
      id: 4,
      name: 'Stealth',
      type: 'Dexterity'
    },
    {
      id: 5,
      name: 'Arcana',
      type: 'Intelligence'
    },
    { 
      id: 6,
      name: 'History',
      type: 'Intelligence'
    },
    {
      id: 7,
      name: 'Nature',
      type: 'Intelligence'
    },
    {
      id: 8,
      name: 'Religion',
      type: 'Intelligence'
    },
    {
      id: 9,
      name: 'Animal Handling',
      type: 'Wisdom'
    },
    {
      id: 10,
      name: 'Insight',
      type: 'Wisdom'
    }, 
    {
      id: 11,
      name: 'Medicine',
      type: 'Wisdom'
    },
    {
      id: 12,
      name: 'Perception',
      type: 'Wisdom'
    },
    {
      id: 13,
      name: 'Survival',
      type: 'Wisdom'
    },
    {
      id: 14,
      name: 'Deception',
      type: 'Charisma'
    },
    {
      id: 15,
      name: 'Intimidation',
      type: 'Charisma'
    },
    {
      id: 16,
      name: 'Performance',
      type: 'Charisma'
    },
    {
      id: 17,
      name: 'Persuasion',
      type: 'Charisma'
    }
  ] // end all skills

  // This code pulls specifically the skill proficiencies of the character and returns it as a string inside of an array.
  let charSkills = charInfo.map(element => {
    return `${element.skill_1} ${element.skill_2} ${element.skill_3} ${element.skill_4} ${element.skill_5} ${element.skill_6}`
  })

  let skillArray = charSkills.map(skill => (
    skill.split(' ').filter(skill => skill !== "null").join(', ')
  ))
  
  return (
    <>

      <div>
        {
          classInfo.map(info => (
            <div className="save-div" key={info.class_id}>
                <SkillItems key={info.class_id} allSkills={allSkills} info={info} />
                <b>Saving Throws (+ Prof. Bonus):</b> 
                <br/>{info.save_prof_1}, {info.save_prof_2}
            </div>
          ))
        }
        <div className="skill-prof-dom">
        <b>Skill Proficiencies (+ Prof. Bonus):</b>
        <br />
        {skillArray}
        </div>
      </div>
    </>
  )
}

export default SkillsAndSaves;