import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import CharacterListPage from '../CharacterListPage/CharacterListPage';
import CharacterSheetStats from '../CharacterListPage/CharacterSheet/CharacterSheetStats.jsx';
import CharacterSheetFeats from '../CharacterListPage/CharacterSheet/CharacterSheetFeats.jsx';
import CharacterSheetSpells from '../CharacterListPage/CharacterSheet/CharacterSheetSpells.jsx';
import CharacterSheetDescription from '../CharacterListPage/CharacterSheet/CharacterSheetDescription.jsx';
import SurveyName from '../CharacterListPage/Survey/SurveyName.jsx';
import SurveyRace from '../CharacterListPage/Survey/SurveyRace.jsx';
import SurveyClass from '../CharacterListPage/Survey/SurveyClass.jsx';
import SurveyReview from '../CharacterListPage/Survey/ReviewPage';
import SurveyClassSkills from '../CharacterListPage/Survey/SurveyClassSkills.jsx';

import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. shows AboutPage at all times (logged in or not)*/}
          <Route exact path="/about">
            <AboutPage />
          </Route>
          {/* ----------- logged in shows UserPage else shows LoginPage ----------- */}
          <ProtectedRoute exact path="/user">
            <CharacterListPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/character-sheet-stats">
            <CharacterSheetStats />
          </ProtectedRoute>

          <ProtectedRoute exact path="/character-sheet-feats">
            <CharacterSheetFeats />
          </ProtectedRoute>

          <ProtectedRoute exact path="/character-sheet-spells">
            <CharacterSheetSpells />
          </ProtectedRoute>

          <ProtectedRoute exact path="/character-sheet-description" >
            <CharacterSheetDescription />
          </ProtectedRoute>

          <ProtectedRoute exact path="/survey-page-1">
            <SurveyName />
          </ProtectedRoute>

         <ProtectedRoute exact path="/survey-page-2">
            <SurveyClass />
          </ProtectedRoute>

          <ProtectedRoute exact path="/survey-page-2.1">
            <SurveyClassSkills />
          </ProtectedRoute>

          <ProtectedRoute exact path="/survey-page-3">
            <SurveyRace />
          </ProtectedRoute>

          <ProtectedRoute exact path="/survey-review">
            <SurveyReview />
          </ProtectedRoute>

          {/* ----------- end of project components ----------- */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
