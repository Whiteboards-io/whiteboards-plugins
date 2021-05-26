import React, { useEffect, useRef } from "react";

import { pluginToHost } from "@whiteboards-io/plugins";

export default function ResizeContainer({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (containerEl) {
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;

        pluginToHost("resizePluginFrame", { width: width + "px", height: height + "px" });
      });

      observer.observe(containerEl);
      return () => observer.unobserve(containerEl);
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
