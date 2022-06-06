import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

import { getJiraSites, oauthApiRequest } from "./plugin-client/plugin-client-oauth";
import { registerTemplate, updateTemplateContent } from "./plugin-client/plugin-client-templates";
import { onHostToPlugin, pluginToHost, waitForExecution } from "./plugin-client";
import { getViewport, setViewport, viewportTranslate } from "./plugin-client/plugin-client-viewport";
import { getPluginBoardData, setPluginBoardData, watchPluginBoardData } from "./plugin-client/plugin-client-board-data";
import { closeSidebar, openSidebar, registerSidebarTool } from "./plugin-client/plugin-client-sidebar-tools";
import {
  hidePluginModal,
  onPluginModalAction,
  setPluginModalActionEnabled,
  showPluginModal,
} from "./plugin-client/plugin-client-modals";
import { resizePluginFrame } from "./plugin-client/plugin-client-iframe";
import {
  createCards,
  onCustomCardToolbarClick,
  onPluginToolboxClick,
  registerCustomCard,
} from "./plugin-client/plugin-client-cards";
import {
  getCardData,
  getCardsIndex,
  getLineData,
  getLinesIndex,
  setCardData,
  setLineData,
  watchCardData,
  watchCardsIndex,
  watchLineData,
  watchLinesIndex,
} from "./plugin-client/plugin-client-board-objects";
import {
  getPluginBoardUserData,
  setPluginBoardUserData,
  watchPluginBoardUserData,
} from "./plugin-client/plugin-client-board-user-data";
import { getBoardUsers, getCurrentBoardUser, watchBoardUsers } from "./plugin-client/plugin-client-board-users";

const WhiteboardsPlugin: AbstractWhiteboardsPlugin = {
  getCardData,
  getCardsIndex,
  getLineData,
  getLinesIndex,
  setCardData,
  setLineData,
  watchCardData,
  watchCardsIndex,
  watchLineData,
  watchLinesIndex,

  resizePluginFrame,

  getCurrentBoardUser,
  getBoardUsers,
  watchBoardUsers,

  getViewport,
  setViewport,
  viewportTranslate,

  registerSidebarTool,
  openSidebar,
  closeSidebar,

  showPluginModal,
  hidePluginModal,
  setPluginModalActionEnabled,
  onPluginModalAction,

  getPluginBoardData,
  setPluginBoardData,
  watchPluginBoardData,

  getPluginBoardUserData,
  setPluginBoardUserData,
  watchPluginBoardUserData,

  getJiraSites,
  oauthApiRequest,

  registerTemplate,
  updateTemplateContent,

  registerCustomCard,
  onCustomCardToolbarClick,
  onPluginToolboxClick,

  createCards,

  pluginToHost,
  onHostToPlugin,
  waitForExecution,
};

export default WhiteboardsPlugin;

onHostToPlugin((message) => {
  if (message.action === "Ping") {
    pluginToHost("Pong");
  }
});
