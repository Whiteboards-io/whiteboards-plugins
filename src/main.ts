import {ExecutionId, HostMessage, OauthSite, TemplateDefinition, Viewport, ViewportTranslate} from "./abstract-whiteboards-plugin";
import WhiteboardsPlugin from "./whiteboads-plugin";

export const {
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
} = WhiteboardsPlugin;

export type {
  Viewport,
  ViewportTranslate,
  OauthSite,
  TemplateDefinition,
  HostMessage,
  ExecutionId
};
