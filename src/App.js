//import logo from './logo.svg';
import './App.css';
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Map from './components/Map.js';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
//import ParticipantList from './components/ParticipantList.js';
import PData from './resources/data.json'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"



function App() {
  //turn JSON file into an object
  let data = PData.map(participant => (
    {
      userID: participant.userID,
      firstName: participant.firstName,
      lastName: participant.lastName,
      lastKnownLocation: 
        {lat: participant.lastKnownLocation[0].latitude,
        long: participant.lastKnownLocation[0].longitude},
      warningLevel: participant.warningLevel
    }
  ))
  //console.log(data);

  return (
    <div className="App">
      <div> <NavBar/> </div>
      <div class="midContainer">
        <div class="left-element"> <SideBar sidebar = {data} /> </div>
        <div class="mid-element"> <Map mapData = {data} /> </div>
        <div class="right-element"> </div>
      </div>
      <header className="App-header">

      </header>

    </div>
  );
}

export default App;
