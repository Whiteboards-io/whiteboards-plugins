export interface UserData {
  id: string;
  displayName: string;
  photoURL: string;
}

export interface Viewport {
  zoom: number;
  rectX: number;
  rectY: number;
  rectMaxX: number;
  rectMaxY: number;
}

export interface ViewportTranslate {
  recommendedZoom: number;
  translate: [number, number];
  animationDuration: number;
}

export interface SidebarToolDefinition {
  id: string;
  icon: string;
  tooltip: string;
  contentUrl: string;
}

export interface PluginModalDefinition {
  title: string;
  contentUrl: string;
  actions: {
    text: string;
    actionId: string;
  }[];
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

export interface CustomCardDefinition {
  id: string;
  icon: string;
  tooltip: string;
  contentUrl: string;
  toolbarOperations: { id: string; label: string; icon: string }[];
}

export interface CardCreateData {
  x: number;
  y: number;
  width: number;
  height: number;
  props: CustomCardData | Record<string, string | number | boolean>;
}

export interface CustomCardData {
  customCardId: string;
}

export type CardId = string;
export type LineId = string;

export type CardData = {
  x: number;
  y: number;
  z?: number;
  width: number;
  height: number;
  [prop: string]: unknown;
};

export type LineData = {
  id: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  startCardId?: string;
  endCardId?: string;
  [prop: string]: unknown;
};

export type ExecutionId = string;

export interface HostMessage<T> {
  action: string;
  payload: T;
  executionId: ExecutionId;
}

export type CancelCallback = () => void;

export default interface AbstractWhiteboardsPlugin {
  resizePluginFrame: (width: string, height: string) => Promise<void>;

  /**
   * Get data of the current user.
   */
  getCurrentBoardUser: () => Promise<UserData>;

  /**
   * Get data of users who are currently present on board.
   */
  getBoardUsers: () => Promise<UserData[]>;

  /**
   * Watch data of users who are currently present on board.
   */
  watchBoardUsers: (callback: (usersData: UserData[]) => void) => CancelCallback;

  /**
   * Get current viewport coords, and zoom
   */
  getViewport: () => Promise<Viewport>;

  /**
   * Set current viewport (instantly)
   * @param viewport
   */
  setViewport: (viewport: Viewport) => Promise<void>;

  /**
   * Animate current viewport to desired location
   * @param viewportTranslate
   */
  viewportTranslate: (viewportTranslate: ViewportTranslate) => Promise<void>;

  /**
   * Register a new sidebar tool, it will display the icon, and the content once clicked.
   * @param definition
   */
  registerSidebarTool: (definition: SidebarToolDefinition) => Promise<void>;

  /**
   * Open a modal dialog accordingly to the definition.
   * @param definition
   */
  showPluginModal: (definition: PluginModalDefinition) => Promise<void>;

  /**
   * Hide currently opened modal that belongs to your plugin.
   */
  hidePluginModal: () => Promise<void>;

  /**
   * Enable or disable one of buttons on currently open modal dialog, which belongs to your plugin.
   * @param actionId
   * @param isEnabled
   */
  setPluginModalActionEnabled: (actionId: string, isEnabled: boolean) => Promise<void>;

  /**
   * Listen on plugin modal action events.
   * @param callback
   */
  onPluginModalAction: (callback: ({ actionId }: { actionId: string }) => void) => CancelCallback;

  /**
   * Get plugin data which is associated with the current board
   */
  getPluginBoardData: <T>() => Promise<T>;

  /**
   * Set plugin data which is associated with the current board
   * @param pluginData
   */
  setPluginBoardData: <T>(pluginData: T) => Promise<void>;

  /**
   * Observe plugin data changes, receive the current state, and then wait for real time updates.
   * @param callback
   */
  watchPluginBoardData: <T>(callback: (pluginData: T) => void) => CancelCallback;

  /**
   * Get plugin data which is associated with the current board and the current user
   */
  getPluginBoardUserData: <T>() => Promise<T>;

  /**
   * Set plugin data which is associated with the current board and the current user
   * @param pluginData
   */
  setPluginBoardUserData: <T>(pluginData: T) => Promise<void>;

  /**
   * Observe plugin board data associated with the current user, receive the current state, and then wait for real time updates.
   * @param callback
   */
  watchPluginBoardUserData: <T>(callback: (pluginData: T) => void) => CancelCallback;

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
   * Register a custom card with its own icon, name, and toolbar operations. The content will be displayed in an iframe.
   * @param definition
   */
  registerCustomCard: (definition: CustomCardDefinition) => Promise<void>;

  /**
   * Listen on custom card toolbar click events.
   */
  onCustomCardToolbarClick: (callback: ({ cardId }: { cardId: CardId }) => void) => CancelCallback;

  /**
   * Listen on plugin toolbox click events.
   */
  onPluginToolboxClick: (callback: ({ customCardId }: { customCardId: string }) => void) => CancelCallback;

  /**
   * Create new cards/shapes on whiteboard.
   * @param cards
   */
  createCards: (cards: CardCreateData[]) => Promise<CardId[]>;

  /**
   * Get a list of card identifiers, currently present on the whiteboard.
   */
  getCardsIndex: () => Promise<CardId[]>;

  /**
   * Get a list of line identifiers, currently present on the whiteboard.
   */
  getLinesIndex: () => Promise<LineId[]>;

  /**
   * Get data for given cardId.
   */
  getCardData: (cardId: CardId) => Promise<CardData | null>;

  /**
   * Get data for given lineId.
   */
  getLineData: (lineId: LineId) => Promise<LineData | null>;

  /**
   * Update card of given cardId with cardData. This can be a partial update.
   *
   * @param cardId
   * @param cardData
   */
  setCardData: (cardId: CardId, cardData: Partial<CardData> | null) => Promise<void>;

  /**
   * Update line of given lineId with lineData. This can be a partial update.
   *
   * @param cardId
   * @param cardData
   */
  setLineData: (lineId: LineId, cardData: Partial<LineData> | null) => Promise<void>;

  /**
   * Attach a listener to the list of card identifiers. It will be executed whenever a card is added or removed from the board.
   *
   * @param callback
   */
  watchCardsIndex: (callback: (cardIds: CardId[]) => void) => CancelCallback;

  /**
   * Attach a listener to the list of line identifiers. It will be executed whenever a line is added or removed from the board.
   *
   * @param callback
   */
  watchLinesIndex: (callback: (lineIds: LineId[]) => void) => CancelCallback;

  /**
   * Attach a listener to the given card data. It will be executed whenever any of card properties changes.
   *
   * @param cardId
   * @param callback
   */
  watchCardData: (cardId: CardId, callback: (cardData: CardData | null) => void) => CancelCallback;

  /**
   * Attach a listener to the given line data. It will be executed whenever any of line properties changes.
   *
   * @param cardId
   * @param callback
   */
  watchLineData: (lineId: LineId, callback: (lineDAta: LineData | null) => void) => CancelCallback;

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

  oauthApiRequest: <T>(
    siteId: string | undefined | null,
    path: string,
    params?: Record<string, unknown>,
    method?: string,
    body?: Record<string, unknown>
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
  onHostToPlugin: <T>(callback: (message: HostMessage<T>) => void) => CancelCallback;

  /**
   * Wait for result of an execution.
   *
   * @param executionId
   * @param executionTimeout
   */
  waitForExecution: <T>(executionId: ExecutionId, executionTimeout?: number | null) => Promise<T>;
}
