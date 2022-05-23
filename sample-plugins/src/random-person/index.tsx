import { useEffect } from "react";
import { registerSidebarTool } from "@whiteboards-io/plugins";
import icon from "./icon.svg";

export default function RandomPersonPluginRoot() {
  useEffect(() => {
    registerSidebarTool({
      id: "random-person",
      icon: window.location.origin + window.location.pathname + icon,
      tooltip: "Random person",
      contentUrl: window.location.origin + window.location.pathname + "?plugin=random-person&page=sidebar",
    });
  }, []);

  return null;
}
