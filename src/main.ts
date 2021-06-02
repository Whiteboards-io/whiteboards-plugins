import AbstractWhiteboardsPlugin, {
  CancelCallback,
  CardId,
  CardCreateData,
  CustomCardDefinition,
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
  resizePluginFrame,

  getViewport,
  setViewport,
  viewportTranslate,

  registerSidebarTool,

  showPluginModal,
  hidePluginModal,
  setPluginModalActionEnabled,
  onPluginModalAction,

  getPluginBoardData,
  setPluginBoardData,
  watchPluginBoardData,

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

  CustomCardDefinition,

  CardCreateData,
  CardId,

  HostMessage,
  ExecutionId,
  CancelCallback,
};
