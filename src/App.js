import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import Layout from "./Layout";

const App = () => (
  <Switch>
    <Route exact path="/"
           render={
             () => <Layout selectedPage={0}/>
           }
    />
    <Route path="/:page"
           render={
             props => <Layout selectedPage={props.location.state.selectedPage}/>
           }
    />
  </Switch>
);

export default App;
