import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h3>Technologies Used:</h3>
      <p>
        <ul>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>ReactJS, React Redux, Redux-Sagas</li>
          <li>PostgreSQL</li>
          <li>Axios</li>
        </ul>
      </p>
      <p>
        Github: <a href="https://github.com/ggSushi" >github.com/ggSushi</a>
      </p>
    </div>
  );
}

export default InfoPage;
