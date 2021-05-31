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
