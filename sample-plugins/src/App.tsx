import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import * as HelloWorld from "./hello-world";
import * as JiraIntegration from "./jira-integration";

function App() {
  return (
    <Router>
      <Switch>
        {/* Hello world */}
        <Route path="/hello-world/template-config"><HelloWorld.TemplateConfig/></Route>
        <Route path="/hello-world/"><HelloWorld.PluginRoot/></Route>
        {/* Jira integration */}
        <Route path="/jira-integration/template-config"><JiraIntegration.TemplateConfig/></Route>
        <Route path="/jira-integration/"><JiraIntegration.PluginRoot/></Route>
      </Switch>
    </Router>
  );
}

export default App;
