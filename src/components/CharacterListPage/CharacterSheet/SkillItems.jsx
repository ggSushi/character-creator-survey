import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function SkillItems({ allSkills, info }) {
  const strSkills = allSkills.filter(skill => skill.type === 'Strength');
  const dexSkills = allSkills.filter(skill => skill.type === 'Dexterity');
  const intSkills = allSkills.filter(skill => skill.type === 'Intelligence');
  const wisSkills = allSkills.filter(skill => skill.type === 'Wisdom');
  const chaSkills = allSkills.filter(skill => skill.type === 'Charisma');
  

  return (
    <>
      <div className="str-skills-div">
        <ul>
          {
            strSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="dex-skills-div">
        <ul>
          {
            dexSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            intSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            wisSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            chaSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default SkillItems;