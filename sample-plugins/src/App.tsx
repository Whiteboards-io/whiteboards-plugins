import React from "react";

import "./App.css";

import * as HelloWorld from "./hello-world";
import * as JiraIntegration from "./jira-integration";
import BoardInspectPluginPage from "./board-inspect";
import BoardInspectPlugiSidebar from "./board-inspect/plugin-sidebar";
import RandomPersonPluginRoot from "./random-person";
import RandomPersonSidebar from "./random-person/sidebar";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const plugin = searchParams.get("plugin");
  const page = searchParams.get("page");

  if (plugin === "hello-world") {
    if (page === "template-config") {
      return <HelloWorld.TemplateConfig />;
    } else if (page === null) {
      return <HelloWorld.PluginRoot />;
    } else {
      return null;
    }
  } else if (plugin === "jira-integration") {
    if (page === "template-config") {
      return <JiraIntegration.TemplateConfig />;
    } else if (page === null) {
      return <JiraIntegration.PluginRoot />;
    } else {
      return null;
    }
  } else if (plugin === "board-inspect") {
    if (page === "sidebar") {
      return <BoardInspectPlugiSidebar />;
    } else if (page === null) {
      return <BoardInspectPluginPage />;
    } else {
      return null;
    }
  } else if (plugin === "random-person") {
    if (page === "sidebar") {
      return <RandomPersonSidebar />;
    } else if (page === null) {
      return <RandomPersonPluginRoot />;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export default App;
