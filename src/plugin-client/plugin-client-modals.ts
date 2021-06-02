import {CancelCallback, PluginModalDefinition} from "../abstract-whiteboards-plugin";
import {onHostToPlugin, pluginToHost, waitForExecution} from "./index";

export async function showPluginModal(definition: PluginModalDefinition): Promise<void> {
  await waitForExecution(pluginToHost("showPluginModal", definition));
}

export async function hidePluginModal(): Promise<void> {
  await waitForExecution(pluginToHost("hidePluginModal"));
}

export async function setPluginModalActionEnabled(actionId: string, isEnabled: boolean): Promise<void> {
  await waitForExecution(pluginToHost("setPluginModalActionEnabled", {actionId, isEnabled}));
}

export function onPluginModalAction(callback: ({actionId}: { actionId: string }) => void): CancelCallback {
  const cancel = onHostToPlugin<{ actionId: string }>((message) => {
    if (message.action === "pluginModalAction") {
      callback(message.payload);
    }
  });

  return () => cancel();
}
