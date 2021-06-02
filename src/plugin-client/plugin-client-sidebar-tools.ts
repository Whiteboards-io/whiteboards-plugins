import {SidebarToolDefinition} from "../abstract-whiteboards-plugin";
import {pluginToHost, waitForExecution} from "./index";

export async function registerSidebarTool(definition: SidebarToolDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerSidebarTool", definition));
}
