import './App.css';
import {Route, Routes} from 'react-router-dom'
import ResponsiveAppBar from './components/menubar';
import Home from './components/home';
import Team from './components/team';
function App() {
  return (
    <div>
      <div className="App">
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
      <Routes>
        <Route path='/' Component={Home}/>
        {/* <Route path='/mission' Component={}/> */}
        <Route path='/team' Component={Team}/>
        {/* <Route path='/about' Component={}/>  */}

      </Routes>  
    </div>
  );
}

export default App;
