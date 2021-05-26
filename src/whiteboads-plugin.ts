import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

import {getJiraSites, oauthApiRequest} from "./plugin-client/plugin-client-oauth";
import {registerTemplate, updateTemplateContent} from "./plugin-client/plugin-client-templates";
import {onHostToPlugin, pluginToHost, waitForExecution} from "./plugin-client";

export default {
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

