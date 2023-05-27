import './Charactersheet.css';

function AbilityScores({info}) {


  return (
    <>
    <b><u>Ability Modifiers:</u></b>
      <div className="abilities">
        <div className="strength">
          Str: {info.str_score}
          <br />
          {
            info.str_mod >= 0 ? (
              <b>(+{info.str_mod})</b>
            ) : (
              <b>({info.str_mod})</b>
            )
          }
        </div>
        <div className="dexterity">
          Dex: {info.dex_score}
          <br />
          {
            info.dex_mod >= 0 ? (
              <b>(+{info.dex_mod})</b>
            ) : (
              <b>({info.dex_mod})</b>
            )
          }
        </div>
        <div className="constitution">
          Con: {info.con_score}
          <br />
          {
            info.con_mod >= 0 ? (
              <b>(+{info.con_mod})</b>
            ) : (
              <b>({info.con_mod})</b>
            )
          }
        </div>
        <div className="intelligence">
          Int: {info.int_score}
          <br />
          {
            info.int_mod >= 0 ? (
              <b>(+{info.int_mod})</b>
            ) : (
              <b>({info.int_mod})</b>
            )
          }
        </div>
        <div className="wisdom">
          Wis: {info.wis_score}
          <br />
          {
            info.wis_mod >= 0 ? (
              <b>(+{info.wis_mod})</b>
            ) : (
              <b>({info.wis_mod})</b>
            )
          }
        </div>
        <div className="charisma">
          Cha: {info.cha_score}
          <br />
          {
            info.cha_mod >= 0 ? (
              <b>(+{info.cha_mod})</b>
            ) : (
              <b>({info.cha_mod})</b>
            )
          }
        </div>
      </div>
    </>
  )
}

export default AbilityScores;