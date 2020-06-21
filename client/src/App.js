import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemsList from './components/todolists/ItemsList'


function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Router>
        <Main />
      </Router>
    </div>
  );
}

function Main() {
  return (
    <Switch>
      <Route exact path="/items" component={ItemsList} />
      <Route exact path="/" component={ItemsList} />
    </Switch>
  )
}

export default App;
