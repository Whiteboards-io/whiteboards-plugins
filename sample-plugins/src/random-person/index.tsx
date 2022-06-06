import { useEffect } from "react";
import { onPluginToolboxClick, openSidebar, registerCustomCard } from "@whiteboards-io/plugins";
import icon from "./icon.svg";

export default function RandomPersonPluginRoot() {
  useEffect(() => {
    registerCustomCard({
      contentUrl: "",
      icon: window.location.origin + window.location.pathname + icon,
      id: "random-person",
      toolbarOperations: [],
      tooltip: "Random person",
    });

    onPluginToolboxClick((props) => {
      openSidebar({
        contentUrl: window.location.origin + window.location.pathname + "?plugin=random-person&page=sidebar",
      });
    });
  }, []);

  return null;
}
