import { onHostToPlugin, pluginToHost, waitForExecution } from "./index";
import { CancelCallback, HostMessage, JiraIssueData } from "../abstract-whiteboards-plugin";

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

export async function oauthApiRequest<T>(
  siteId: string | undefined | null,
  path: string,
  params?: Record<string, unknown>,
  method = "GET",
  body?: Record<string, unknown>
): Promise<T> {
  const { response, exception } = (await waitForExecution(
    pluginToHost("oauthRequest", {
      siteId,
      path,
      params,
      method,
      body,
    })
  )) as { response: T; exception: Error };

  if (exception) {
    throw exception;
  } else {
    return response;
  }
}

export async function getJiraIssueData(payload: { siteId: string; issueId: number }): Promise<JiraIssueData> {
  return await waitForExecution<JiraIssueData>(pluginToHost("getJiraIssueData", payload));
}

export function watchJiraIssueData(
  payload: {
    siteId: string;
    issueId: number;
  },
  callback: (data: JiraIssueData) => void
): CancelCallback {
  const executionId = pluginToHost("watchJiraIssueData", payload);

  const cancel = onHostToPlugin<JiraIssueData>((message: HostMessage<JiraIssueData>) => {
    if (message.executionId === executionId) {
      callback(message.payload);
    }
  });

  return () => {
    cancel();
    pluginToHost("cancelJiraIssueDataWatch", { executionId });
  };
}
