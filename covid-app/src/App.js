import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css'

import StatePage from './components/State_Page/State-Page.js'
import HomePage from './pages/HomePage/HomePage.js'
import NavBar from './components/NavBar/NavBar.js'

import Comments from './components/Comments/Comments.js'
import LoginSignUp from './components/Authentication/LoginSignUp'
import UserProfile from './components/UserProfile/UserProfile.js'
import { fetchCurrentUSValues, fetchCurrentStateValues } from './API/InfectionsAPI';


function App(props) {
  //Create State to store State name. setStateName is passed to the map and stateName is passed to State-Page
  const [stateName, setStateName] = useState('')
  const [currentUSValues, setCurrentUSValues] = useState([])
  const [currentStateValues, setCurrentStateValues] = useState([])

  React.useEffect(() => {
    async function getCurrentUSValues() {
      const data = await fetchCurrentUSValues()
      setCurrentUSValues(data)
    }
    getCurrentUSValues()
  }, [])

  React.useEffect(() => {
    async function getCurrentStateValues() {
      const data = await fetchCurrentStateValues()
      setCurrentStateValues(data)
    }
    getCurrentStateValues()
  }, [])

  const renderStatePage = (props) => {
    return (
      <StatePage sName={stateName} />
    )
  }

  const renderHomePage = (props) => {
    return (
      <HomePage setSName={setStateName} currentUSValues={currentUSValues} currentStateValues={currentStateValues} />
    )
  }

  return (
    <div id={'app-container'}>

      <div className="nav-bar">
        <LoginSignUp />
        <NavBar />
      </div>

      <div className={"body-container"}>
        <Switch>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/state-page" render={renderStatePage} />
          <Route exact path="/add-comments" component={Comments} />
          <Route exact path="/user-profile" component={UserProfile} />
        </Switch>
      </div>

    </div>



  );
}

export default App;