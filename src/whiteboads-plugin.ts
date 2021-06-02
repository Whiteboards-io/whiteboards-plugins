import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

import {getJiraSites, oauthApiRequest} from "./plugin-client/plugin-client-oauth";
import {registerTemplate, updateTemplateContent} from "./plugin-client/plugin-client-templates";
import {onHostToPlugin, pluginToHost, waitForExecution} from "./plugin-client";
import {getViewport, setViewport, viewportTranslate} from "./plugin-client/plugin-client-viewport";
import {getPluginBoardData, setPluginBoardData, watchPluginBoardData} from "./plugin-client/plugin-client-board-data";
import {registerSidebarTool} from "./plugin-client/plugin-client-sidebar-tools";
import {hidePluginModal, setPluginModalActionEnabled, showPluginModal} from "./plugin-client/plugin-client-modals";
import {resizePluginFrame} from "./plugin-client/plugin-client-iframe";
import {createCards, registerCustomCard} from "./plugin-client/plugin-client-cards";

export default {
  resizePluginFrame,

  getViewport,
  setViewport,
  viewportTranslate,

  registerSidebarTool,

  showPluginModal,
  hidePluginModal,
  setPluginModalActionEnabled,

  getPluginBoardData,
  setPluginBoardData,
  watchPluginBoardData,

  getJiraSites,
  oauthApiRequest,

  registerTemplate,
  updateTemplateContent,

  registerCustomCard,

  createCards,

  pluginToHost,
  onHostToPlugin,
  waitForExecution
} as AbstractWhiteboardsPlugin;

onHostToPlugin((message) => {
  if (message.action === "Ping") {
    pluginToHost("Pong")
  }
})

