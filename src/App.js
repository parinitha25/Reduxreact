import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Act from './Practice/Act';
import Act2 from './Practice/Act2';
import Act3  from './Practice/Act3';
import Pract1  from './Practice/Pract1';
import Actiona  from './Task1/Actiona';
import Ageupdown  from './Components/Ageupdown';
import Task2component  from './Components/Task2component';
import Task3component  from './Components/Task3component';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route exact path='/pract1' component={Act}></Route>
      <Route exact path='/pract2' component={Act2}></Route> 
      <Route exact path='/pract3' component={Act3}></Route>  
      <Route exact path='/pract4' component={Actiona}></Route> 
      <Route exact path='/pract5' component={Ageupdown}></Route> 
      <Route exact path='/pract6' component={Task2component}></Route> 
      <Route exact path='/pract7' component={Pract1}></Route> 
      <Route exact path='/pract8' component={Task3component}></Route> 

      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
