import { useEffect } from "react";
import logo from '../logo.svg';
import {registerTemplate} from "@whiteboards-io/plugins";

export default function PluginRoot() {
  useEffect(() => {
    registerTemplate({
      id: "hello-world-template",
      fixed: true,
      title: "Hello World",
      description: "This is an example plugin with configuration screen",
      illustration: window.location.origin + logo,
      configurationUrl: window.location.origin + window.location.pathname + "template-config",
      content: {}
    })
  }, []);

  return null;
}
