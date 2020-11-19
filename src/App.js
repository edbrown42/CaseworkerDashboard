//import logo from './logo.svg';
import './App.css';
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Map from './components/Map.js';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js'

function App() {
  return (
    <div className="App">
      <div> <NavBar/> </div>
      <div class="midContainer">
        <div class="left-element"> <SideBar/> </div>
        <div class="mid-element"> <Map /> </div>
        <div class="right-element"> </div>
      </div>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
