

function SkillsAndSaves({classInfo}) {


  return (
    <>
      <div>
        {
          classInfo.map(info => (
            <div key={info.id}>
              This is doubling and I need to change the SQL Query for this call.
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SkillsAndSaves;