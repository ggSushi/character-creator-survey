import {HashRouter as Router, Link} from 'react-router-dom';

function CharacterNav() {


  return(
    <>
    <ul className="char-nav">
      <Router>
        <li className="char-link"><Link to="/character-sheet-stats">Stats</Link></li>
        <li className="char-link"><Link to="/character-sheet-description">Description</Link></li>
      </Router>
    </ul>
    </>
  )
}

export default CharacterNav;