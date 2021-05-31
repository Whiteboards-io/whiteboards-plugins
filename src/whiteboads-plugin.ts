import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

import {getJiraSites, oauthApiRequest} from "./plugin-client/plugin-client-oauth";
import {registerTemplate, updateTemplateContent} from "./plugin-client/plugin-client-templates";
import {onHostToPlugin, pluginToHost, waitForExecution} from "./plugin-client";
import {getViewport, setViewport, viewportTranslate} from "./plugin-client/plugin-client-viewport";
import {getPluginBoardData, setPluginBoardData} from "./plugin-client/plugin-client-board-data";

export default {
  getViewport,
  setViewport,
  viewportTranslate,

  getPluginBoardData,
  setPluginBoardData,

  getJiraSites,
  oauthApiRequest,

  registerTemplate,
  updateTemplateContent,

  pluginToHost,
  onHostToPlugin,
  waitForExecution
} as AbstractWhiteboardsPlugin;

onHostToPlugin((message) => {
  if (message.action === "Ping") {
    pluginToHost("Pong")
  }
})

