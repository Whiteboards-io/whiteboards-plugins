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
  ViewportTranslate,
  CardData,
  LineData,
  UserData,
} from "./abstract-whiteboards-plugin";
import WhiteboardsPlugin from "./whiteboads-plugin";

export const {
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
  getJiraIssueData,
  watchJiraIssueData,

  registerTemplate,
  updateTemplateContent,

  registerCustomCard,
  onCustomCardToolbarClick,
  onPluginToolboxClick,

  createCards,

  pluginToHost,
  onHostToPlugin,
  waitForExecution,
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
  CardData,
  LineData,
  UserData,
};
