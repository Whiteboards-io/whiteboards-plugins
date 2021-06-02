import {CancelCallback, CardCreateData, CardId, CustomCardDefinition} from "../abstract-whiteboards-plugin";
import {onHostToPlugin, pluginToHost, waitForExecution} from "./index";

export async function registerCustomCard(definition: CustomCardDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerCustomCard", definition));
}

export async function createCards(cards: CardCreateData[]): Promise<CardId[]> {
  return await waitForExecution<CardId[]>(pluginToHost("createCards", cards));
}

export function onCustomCardToolbarClick(callback: ({cardId}: { cardId: CardId }) => void): CancelCallback {
  const cancel = onHostToPlugin<{ cardId: CardId }>((message) => {
    if (message.action === "customCardToolbarClick") {
      callback(message.payload);
    }
  });

  return () => cancel();
}

export function onPluginToolboxClick(callback: ({customCardId}: { customCardId: string }) => void): CancelCallback {
  const cancel = onHostToPlugin<{ customCardId: string }>((message) => {
    if (message.action === "pluginToolboxClick") {
      callback(message.payload);
    }
  });

  return () => cancel();

}
