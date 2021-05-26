import { pluginToHost, waitForExecution } from "./index";

export interface OauthSite {
  url: string;
  id: string;
  instanceId?: string;
  name: string;
  type: string;
  avatarUrl: string;
}

export async function getJiraSites(): Promise<OauthSite[]> {
  return (await waitForExecution(pluginToHost("getJiraSites"))) as OauthSite[];
}

export async function oauthApiRequest(
  siteId: string | undefined | null,
  path: string,
  params?: Record<string, unknown>,
  method = "GET",
  body?: Record<string, unknown>
): Promise<unknown> {
  const { response, exception } = (await waitForExecution(
    pluginToHost("oauthRequest", {
      siteId,
      path,
      params,
      method,
      body,
    })
  )) as { response: unknown; exception: Error };

  if (exception) {
    throw exception;
  } else {
    return response;
  }
}
