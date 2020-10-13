import React from "react";
import "../styles/App.css";
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <body>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties}/>
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
