import React from "react";
import {pluginToHost} from "@whiteboards-io/plugins";

export default function TemplateConfig() {
  return <>
    <h3>Hello world!</h3>
    <p>This is a very simple template.</p>
    <button onClick={() => pluginToHost("onGenerate", {
      content: {
        cards: {
          _index: {
            card1: true
          },
          _items: {
            card1: {
              id: "card1",
              x: 0,
              y: 0,
              width: 100,
              height: 50,
              text: "Hello World!"
            }
          }
        }
      }
    })}>Click to continue</button>
  </>;
}
