import { useEffect } from "react";

import { registerSidebarTool } from "@whiteboards-io/plugins";

import icon from "./icon.svg";

export default function PluginRoot() {
  useEffect(() => {
    registerSidebarTool({
      id: "board-inspect",
      icon: window.location.origin + icon,
      tooltip: "Board inspect",
      contentUrl: window.location.origin + window.location.pathname + "?plugin=board-inspect&page=sidebar",
    });
  }, []);

  return null;
}
