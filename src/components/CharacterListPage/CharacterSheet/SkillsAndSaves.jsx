import SkillItems from './SkillItems.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function SkillsAndSaves({ classInfo }) {
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
    }, {
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

  // This code pulls specifically the skill proficiencies of the character and returns it as a string inside of an array.
  let charSkills = charInfo.map(function (element) {
    return `${element.skill_1} ${element.skill_2} ${element.skill_3} ${element.skill_4} ${element.skill_5} ${element.skill_6}`
  })

  let skillArray = charSkills.map(skill => (
    skill.split(' ').filter(skill => skill !== "null").join(', ')
  ))

  console.log(skillArray)
  console.log(charSkills)



  return (
    <>

      <div>
        {
          classInfo.map(info => (
            <div key={info.id}>
              <div>
                <SkillItems key={info.id} allSkills={allSkills} info={info} />
              </div>
              <div className="saves-div">
                <b>Saving Throws (+ Prof. Bonus):</b> {info.save_prof_1}, {info.save_prof_2}
              </div>

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