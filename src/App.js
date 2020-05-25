import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import Layout from "./Layout";

const App = () => (
  <Switch>
    <Route path="/:page"
           render={
             props => <Layout selectedPage={props.location.state.selectedPage}/>
           }
    >
    </Route>
  </Switch>
);

export default App;
