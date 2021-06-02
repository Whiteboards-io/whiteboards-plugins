import { pluginToHost, waitForExecution } from "./index";

export async function resizePluginFrame(width: string, height: string): Promise<void> {
  await waitForExecution(pluginToHost("resizePluginFrame", { width: width, height }));
}
