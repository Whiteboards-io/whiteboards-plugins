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
  fixed: boolean;
  title: string;
  description: string;
  illustration: string;
  configurationUrl: string;
  content: Record<string, unknown>;
}

export default interface AbstractWhiteboardsPlugin {
  registerTemplate: (definition: TemplateDefinition) => Promise<void>;
  getJiraSites: () => Promise<OauthSite[]>;

  oauthApiRequest: (
    siteId: string | undefined | null,
    path: string,
    params?: Record<string, unknown>,
    method?: string,
    body?: Record<string, unknown>,
  ) => Promise<unknown>;

  pluginToHost: (action: string, payload?: unknown) => string;

  waitForExecution: (executionId: string, executionTimeout?: number | null) => Promise<unknown>;
}
