import { pluginToHost, waitForExecution } from "./index";
import { Viewport, ViewportTranslate } from "../abstract-whiteboards-plugin";

export async function getViewport(): Promise<Viewport> {
  return (await waitForExecution(pluginToHost("getViewport"))) as Viewport;
}

export async function setViewport(viewport: Viewport): Promise<void> {
  await waitForExecution(pluginToHost("setViewport", viewport));
}

export async function viewportTranslate(viewportTranslate: ViewportTranslate): Promise<void> {
  await waitForExecution(pluginToHost("viewportTranslate", viewportTranslate));
}
