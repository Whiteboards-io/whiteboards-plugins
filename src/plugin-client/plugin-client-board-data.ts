import { onHostToPlugin, pluginToHost, waitForExecution } from "./index";
import { CancelCallback, HostMessage } from "../abstract-whiteboards-plugin";

export async function getPluginBoardData<T>(): Promise<T> {
  return (await waitForExecution(pluginToHost("getPluginBoardData"))) as T;
}

export async function setPluginBoardData<T>(pluginData: T): Promise<void> {
  await waitForExecution(pluginToHost("setPluginBoardData", pluginData));
}

export function watchPluginBoardData<T>(callback: (pluginData: T) => void): CancelCallback {
  const executionId = pluginToHost("watchPluginBoardData");

  const cancel = onHostToPlugin<T>((message: HostMessage<T>) => {
    if (message.executionId === executionId) {
      callback(message.payload);
    }
  });

  return () => {
    cancel();
    pluginToHost("cancelPluginBoardDataWatch", { executionId });
  };
}
