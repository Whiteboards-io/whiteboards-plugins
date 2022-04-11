import { TemplateDefinition } from "../abstract-whiteboards-plugin";
import { pluginToHost, waitForExecution } from "./index";

export async function registerTemplate(definition: TemplateDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerTemplate", definition));
}

export async function updateTemplateContent(content: Record<string, unknown> | null): Promise<void> {
  await waitForExecution(pluginToHost("onGenerate", { content }));
}
