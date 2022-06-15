import { useEffect } from "react";
import { onPluginToolboxClick } from "@whiteboards-io/plugins";

export function usePluginToolboxClick(callback: ({ customCardId }: { customCardId: string }) => void) {
  useEffect(() => onPluginToolboxClick(callback), [callback]);
}
