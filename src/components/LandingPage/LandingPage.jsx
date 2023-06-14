import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to the Character Creator Survey!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Looking to start playing Dungeons and Dragons, but building a character 
            is complicated and taking up so much of your time? This app aims to make 
            it easier for you so you can just jump straight into it!
          </p>

          <p>
            Log in to the app, or register if you already haven't, and you'll be 
            taken to your Character List page, where your creations will reside! 
            Click on the "New Character" button to begin the survey, and by the 
            time you finish, you'll have a fresh, Level 1 character to start your 
            journey! Going into the "description" tab afterwards will allow you to 
            edit the description, alignment, ideals and flaws of your character!
          </p>

          <p>
            You'll find the process is significantly easier, and once you get the hang 
            of seeing what each skill, stat, and spell does, you'll have a much easier 
            time creating new characters in the future! Good luck, adventurer! Safe Journey!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
