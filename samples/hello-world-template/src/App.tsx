import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import TemplateConfig from "./template-config";
import PluginRoot from "./plugin-root";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/template-config"><TemplateConfig /></Route>
        <Route path="/"><PluginRoot /></Route>
      </Switch>
    </Router>
  );
}

export default App;
