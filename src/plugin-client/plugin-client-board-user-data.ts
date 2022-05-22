import { onHostToPlugin, pluginToHost, waitForExecution } from "./index";
import { CancelCallback, HostMessage } from "../abstract-whiteboards-plugin";

export async function getPluginBoardUserData<T>(): Promise<T> {
  return (await waitForExecution(pluginToHost("getPluginBoardUserData"))) as T;
}

export async function setPluginBoardUserData<T>(pluginData: T): Promise<void> {
  await waitForExecution(pluginToHost("setPluginBoardUserData", pluginData));
}

export function watchPluginBoardUserData<T>(callback: (pluginData: T) => void): CancelCallback {
  const executionId = pluginToHost("watchPluginBoardUserData");

  const cancel = onHostToPlugin<T>((message: HostMessage<T>) => {
    if (message.executionId === executionId) {
      callback(message.payload);
    }
  });

  return () => {
    cancel();
    pluginToHost("cancelPluginBoardUserDataWatch", { executionId });
  };
}
