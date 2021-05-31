import {pluginToHost, waitForExecution} from "./index";

export async function  getPluginBoardData<T>(): Promise<T> {
  return (await waitForExecution(pluginToHost("getPluginBoardData"))) as T;
}

export async function setPluginBoardData<T>(pluginData: T): Promise<void> {
  await waitForExecution(pluginToHost("setPluginBoardData", pluginData));
}
