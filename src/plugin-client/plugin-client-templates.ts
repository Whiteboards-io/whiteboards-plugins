import {TemplateDefinition} from "../abstract-whiteboards-plugin";
import {pluginToHost, waitForExecution} from "./index";

export async function registerTemplate(definition: TemplateDefinition): Promise<void> {
  await waitForExecution(pluginToHost("registerTemplate", definition));
}
