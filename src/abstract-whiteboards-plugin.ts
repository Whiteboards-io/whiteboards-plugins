export interface Viewport {
  zoom: number; rectX: number; rectY: number; rectMaxX: number; rectMaxY: number
}

export interface ViewportTranslate {
  recommendedZoom: number; translate: [number, number]; animationDuration: number
}

export interface OauthSite {
  url: string;
  id: string;
  instanceId?: string;
  name: string;
  type: string;
  avatarUrl: string;
}

export interface TemplateDefinition {
  id: string;
  title: string;
  description: string;
  illustration: string;
  configurationUrl: string;
  content: Record<string, unknown>;
}

export type ExecutionId = string;

export interface HostMessage {
  action: string;
  payload: unknown;
  executionId: ExecutionId;
}

export default interface AbstractWhiteboardsPlugin {
  /**
   * Get current viewport coords, and zoom
   */
  getViewport: () => Promise<Viewport>,

  /**
   * Set current viewport (instantly)
   * @param viewport
   */
  setViewport: (viewport: Viewport) => Promise<void>,

  /**
   * Animate current viewport to desired location
   * @param viewportTranslate
   */
  viewportTranslate: (viewportTranslate: ViewportTranslate) => Promise<void>,


  /**
   * Get plugin data which is associated with the current board
   */
  getPluginBoardData: <T> () => Promise<T>,

  /**
   * Set plugin data which is associated with the current board
   * @param pluginData
   */
  setPluginBoardData: <T>(pluginData: T) => Promise<void>,


  /**
   * Register a template
   * @param definition
   */
  registerTemplate: (definition: TemplateDefinition) => Promise<void>;

  /**
   * Update status of CURRENT template configuration
   * @param content
   */
  updateTemplateContent: (content: Record<string, unknown> | null) => Promise<void>;


  /**
   * Get connected Jira sites
   */
  getJiraSites: () => Promise<OauthSite[]>;

  /**
   * Make a request to Jira site
   *
   * @param siteId
   * @param path
   * @param params
   * @param method
   * @param body
   */

  oauthApiRequest: <T> (
    siteId: string | undefined | null,
    path: string,
    params?: Record<string, unknown>,
    method?: string,
    body?: Record<string, unknown>,
  ) => Promise<T>;


  /**
   * Low level API for communication with the host app
   *
   * @param action
   * @param payload
   */
  pluginToHost: (action: string, payload?: unknown) => ExecutionId;

  /**
   * Connect a listener to messages coming from the host app
   *
   * @param callback
   */
  onHostToPlugin: (callback: (message: HostMessage) => void) => () => void;

  /**
   * Wait for result of an execution.
   *
   * @param executionId
   * @param executionTimeout
   */
  waitForExecution: <T> (executionId: ExecutionId, executionTimeout?: number | null) => Promise<T>;
}
