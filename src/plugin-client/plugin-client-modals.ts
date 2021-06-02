import {PluginModalDefinition} from "../abstract-whiteboards-plugin";
import {pluginToHost, waitForExecution} from "./index";

export async function showPluginModal(definition: PluginModalDefinition): Promise<void> {
  await waitForExecution(pluginToHost("showPluginModal", definition));
}

export async function hidePluginModal(): Promise<void> {
  await waitForExecution(pluginToHost("hidePluginModal"));
}

export async function setPluginModalActionEnabled(actionId: string, isEnabled: boolean): Promise<void> {
  await waitForExecution(pluginToHost("setPluginModalActionEnabled", {actionId, isEnabled}));
}
