import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

import {getJiraSites, oauthApiRequest} from "./plugin-client/plugin-client-oauth";
import {registerTemplate, updateTemplateContent} from "./plugin-client/plugin-client-templates";
import {pluginToHost, waitForExecution} from "./plugin-client";

export default {
  getJiraSites,
  oauthApiRequest,

  registerTemplate,
  updateTemplateContent,

  pluginToHost,
  waitForExecution
} as AbstractWhiteboardsPlugin;

