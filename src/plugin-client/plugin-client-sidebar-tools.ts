import { SidebarToolDefinition } from "../abstract-whiteboards-plugin";
import { pluginToHost, waitForExecution } from "./index";

export async function registerSidebarTool(definition: SidebarToolDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerSidebarTool", definition));
}

export async function openSidebar(props: { contentUrl: string } | { pluginSidebarId: string }): Promise<void> {
  await waitForExecution(pluginToHost("openSidebar", props));
}

export async function closeSidebar(): Promise<void> {
  await waitForExecution(pluginToHost("closeSidebar"));
}
