import React, { useEffect } from "react";

import { updateTemplateContent, registerTemplate } from "@whiteboards-io/plugins";

import logo from "../logo.svg";
import ResizeContainer from "../resize-container";

export function PluginRoot() {
  useEffect(() => {
    registerTemplate({
      id: "hello-world-template",
      title: "Hello World",
      description: "This is an example plugin with configuration screen",
      illustration: window.location.origin + logo,
      configurationUrl: window.location.origin + window.location.pathname + "?plugin=hello-world&page=template-config",
      content: {},
    });
  }, []);

  return null;
}

export function TemplateConfig() {
  return (
    <ResizeContainer>
      <h3>Hello world!</h3>
      <p>This is a very simple template.</p>
      <button
        onClick={() =>
          updateTemplateContent({
            cards: {
              _index: {
                card1: true,
              },
              _items: {
                card1: {
                  id: "card1",
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 50,
                  text: "Hello World!",
                },
              },
            },
          })
        }
      >
        Click to continue
      </button>
    </ResizeContainer>
  );
}
