import {CardCreateData, CardId, CustomCardDefinition} from "../abstract-whiteboards-plugin";
import {pluginToHost, waitForExecution} from "./index";

export async function registerCustomCard(definition: CustomCardDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerCustomCard", definition));
}

export async function createCards(cards: CardCreateData[]): Promise<CardId[]> {
  return await waitForExecution<CardId[]>(pluginToHost("createCards", cards));
}
