

function SkillItems({ allSkills, info }) {
  const strSkills = allSkills.filter(skill => skill.type === 'Strength');
  const dexSkills = allSkills.filter(skill => skill.type === 'Dexterity');
  const intSkills = allSkills.filter(skill => skill.type === 'Intelligence');
  const wisSkills = allSkills.filter(skill => skill.type === 'Wisdom');
  const chaSkills = allSkills.filter(skill => skill.type === 'Charisma');
  

  return (
    <div id="all-skills-div" key={info.id}>
      <div className="str-skills-div">
        <u>STR</u>
        <ul>
          {
            strSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="dex-skills-div">
        <u>DEX</u>
        <ul>
          {
            dexSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="int-skills-div">
        <u>INT</u>
        <ul>
          {
            intSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="wis-skills-div">
        <u>WIS</u>
        <ul>
          {
            wisSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="cha-skills-div">
        <u>CHA</u>
        <ul>
          {
            chaSkills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SkillItems;