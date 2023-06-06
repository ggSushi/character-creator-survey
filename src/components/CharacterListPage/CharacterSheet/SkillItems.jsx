

function SkillItems({ allSkills, info }) {
  const strSkills = allSkills.filter(skill => skill.type === 'Strength');
  const dexSkills = allSkills.filter(skill => skill.type === 'Dexterity');
  const intSkills = allSkills.filter(skill => skill.type === 'Intelligence');
  const wisSkills = allSkills.filter(skill => skill.type === 'Wisdom');
  const chaSkills = allSkills.filter(skill => skill.type === 'Charisma');
  

  return (
    <div id="all-skills-div">
      <div className="str-skills-div">
        <u className="skill-name">STR</u>
        <ul className="skill-ul">
          {
            strSkills.map(skill => (
              <li className="skill-list" key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="dex-skills-div">
        <u className="skill-name">DEX</u>
        <ul className="skill-ul">
          {
            dexSkills.map(skill => (
              <li className="skill-list" key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="int-skills-div">
        <u className="skill-name">INT</u>
        <ul className="skill-ul">
          {
            intSkills.map(skill => (
              <li className="skill-list" key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="wis-skills-div">
        <u className="skill-name">WIS</u>
        <ul className="skill-ul">
          {
            wisSkills.map(skill => (
              <li className="skill-list" key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
      <div className="cha-skills-div">
        <u className="skill-name">CHA</u>
        <ul className="skill-ul">
          {
            chaSkills.map(skill => (
              <li className="skill-list" key={skill.id}>{skill.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SkillItems;