import AbstractWhiteboardsPlugin, {
  CancelCallback,
  ExecutionId,
  HostMessage,
  OauthSite,
  PluginModalDefinition,
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

  pluginToHost,
  onHostToPlugin,
  waitForExecution
} = WhiteboardsPlugin;

export type {
  AbstractWhiteboardsPlugin,
  Viewport,
  ViewportTranslate,
  SidebarToolDefinition,
  PluginModalDefinition,
  OauthSite,
  TemplateDefinition,
  HostMessage,
  ExecutionId,
  CancelCallback,
};
