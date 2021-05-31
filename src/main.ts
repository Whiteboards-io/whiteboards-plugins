import AbstractWhiteboardsPlugin, {
  CancelCallback,
  ExecutionId,
  HostMessage,
  OauthSite,
  TemplateDefinition,
  Viewport,
  ViewportTranslate
} from "./abstract-whiteboards-plugin";
import WhiteboardsPlugin from "./whiteboads-plugin";

export const {
  getViewport,
  setViewport,
  viewportTranslate,

  getPluginBoardData,
  setPluginBoardData,
  watchPluginBoardData,

  getJiraSites,
  oauthApiRequest,

  registerTemplate,
  updateTemplateContent,

  pluginToHost,
  onHostToPlugin,
  waitForExecution
} = WhiteboardsPlugin;

export type {
  AbstractWhiteboardsPlugin,
  Viewport,
  ViewportTranslate,
  OauthSite,
  TemplateDefinition,
  HostMessage,
  ExecutionId,
  CancelCallback,
};
