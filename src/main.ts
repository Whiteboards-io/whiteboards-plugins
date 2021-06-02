import AbstractWhiteboardsPlugin, {
  CancelCallback,
  ExecutionId,
  HostMessage,
  OauthSite,
  SidebarToolDefinition,
  TemplateDefinition,
  Viewport,
  ViewportTranslate
} from "./abstract-whiteboards-plugin";
import WhiteboardsPlugin from "./whiteboads-plugin";

export const {
  getViewport,
  setViewport,
  viewportTranslate,

  registerSidebarTool,

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
  SidebarToolDefinition,
  OauthSite,
  TemplateDefinition,
  HostMessage,
  ExecutionId,
  CancelCallback,
};
