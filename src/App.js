//import logo from './logo.svg';
import './App.css';
import JoiningLetter from './components/JoiningLetter';
//import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Download from './components/Download';
//import SupportTeam from './components/SupportTeam';
//import SupportTeamService from './components/Services/SupportTeamService';

function App() {
  return (
    <div className="App" id="pagetodownload" >

      <JoiningLetter/>
      <Download 
      setFile="pagetodownload" 
      file="JoiningLetter"
      />
    </div>
    
  );
}

export default App;
