import { CancelCallback, CardData, CardId, HostMessage, LineData, LineId } from "../abstract-whiteboards-plugin";
import { onHostToPlugin, pluginToHost, waitForExecution } from "./index";

export async function getCardsIndex(): Promise<CardId[]> {
  return (await waitForExecution(pluginToHost("getCardsIndex"))) as CardId[];
}

export async function getLinesIndex(): Promise<LineId[]> {
  return (await waitForExecution(pluginToHost("getLinesIndex"))) as LineId[];
}

export async function getCardData(cardId: CardId): Promise<CardData | null> {
  return (await waitForExecution(pluginToHost("getCardData", cardId))) as CardData;
}

export async function getLineData(lineId: LineId): Promise<LineData | null> {
  return (await waitForExecution(pluginToHost("getLineData", lineId))) as LineData;
}

export async function setCardData(cardId: CardId, cardData: Partial<CardData> | null): Promise<void> {
  await waitForExecution(pluginToHost("setCardData", { cardId, cardData }));
}

export async function setLineData(lineId: LineId, lineData: Partial<LineData> | null): Promise<void> {
  await waitForExecution(pluginToHost("setLineData", { lineId, lineData }));
}

function watchData<T>(watchAction: string, callback: (cardIds: T) => void, payload?: unknown) {
  const executionId = pluginToHost(watchAction, payload);

  const cancel = onHostToPlugin<T>((message: HostMessage<T>) => {
    if (message.executionId === executionId) {
      callback(message.payload);
    }
  });

  return () => {
    cancel();
    pluginToHost("cancelPluginBoardObjectsWatch", { executionId });
  };
}

export function watchCardsIndex(callback: (cardIds: CardId[]) => void): CancelCallback {
  return watchData("watchCardsIndex", callback);
}

export function watchLinesIndex(callback: (lineIds: LineId[]) => void): CancelCallback {
  return watchData("watchLinesIndex", callback);
}

export function watchCardData(cardId: CardId, callback: (cardData: CardData | null) => void): CancelCallback {
  return watchData("watchCardData", callback, cardId);
}

export function watchLineData(lineId: LineId, callback: (lineDAta: LineData | null) => void): CancelCallback {
  return watchData("watchLineData", callback, lineId);
}
