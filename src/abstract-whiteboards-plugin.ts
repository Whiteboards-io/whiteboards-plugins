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

export default interface AbstractWhiteboardsPlugin {
  registerTemplate: (definition: TemplateDefinition) => Promise<void>;
  updateTemplateContent: (content: Record<string, unknown>) => Promise<void>;

  getJiraSites: () => Promise<OauthSite[]>;
  oauthApiRequest: <T> (
    siteId: string | undefined | null,
    path: string,
    params?: Record<string, unknown>,
    method?: string,
    body?: Record<string, unknown>,
  ) => Promise<T>;

  pluginToHost: (action: string, payload?: unknown) => string;

  waitForExecution: <T> (executionId: string, executionTimeout?: number | null) => Promise<T>;
}
