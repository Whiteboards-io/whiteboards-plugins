import { registerCustomCard, createCards } from "@whiteboards-io/plugins";
import { usePluginToolboxClick } from "../hooks";
import { getCurrentViewport } from "../utils";

export default function JiraCalculator() {
  registerCustomCard({
    contentUrl: window.location.origin + window.location.pathname + "?plugin=jira-calculator&page=card",
    icon: "",
    id: "jira-calculator",
    toolbarOperations: [],
    tooltip: "Jira Calculator",
  });

  usePluginToolboxClick(async ({ customCardId }) => {
    if (customCardId !== "jira-calculator") {
      return null;
    }

    const viewport = await getCurrentViewport();
    const [cardId] = await createCards([
      {
        x: viewport.location[0],
        y: viewport.location[1],
        width: 100,
        height: 100,
        props: {
          customCardId: "jira-calculator",
        },
      },
    ]);
  });

  return null;
}
