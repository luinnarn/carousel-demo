import React from 'react';
import './App.css';
import {Route, Switch,} from "react-router-dom";
import Layout from "./Layout";

export const pages = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

const App = () => (
  <Switch>
    <Route exact path="/"
           render={
             () => <Layout selectedPage={0}/>
           }
    />
    {
      pages.map((page, index) => (
        <Route path={'/' + page} render={() => <Layout selectedPage={index}/>} />
      ))
    }
  </Switch>
);

export default App;
