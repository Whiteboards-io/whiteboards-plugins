import React, { useEffect, useState } from "react";

import { useAsync } from "react-async-hook";

import Select from "@atlaskit/select";
import Textfield from "@atlaskit/textfield";

import { updateTemplateContent, registerTemplate, getJiraSites } from "@whiteboards-io/plugins";

import logo from "../logo.svg";
import ResizeContainer from "../resize-container";

export function PluginRoot() {
  useEffect(() => {
    registerTemplate({
      id: "jira-integration-template",
      title: "Jira integration",
      description: "This is an example plugin with configuration screen that integrates with Jira",
      illustration: window.location.origin + logo,
      configurationUrl: window.location.origin + window.location.pathname + "?template-config",
      content: {},
    });
  }, []);

  return null;
}

interface ConfigState {
  siteId: string | undefined;
  jql: string | undefined;
}

export function TemplateConfig() {
  const sites = useAsync(getJiraSites, []);

  const [configState, setConfigState] = useState<ConfigState>({
    siteId: undefined,
    jql: "ORDER BY lastViewed DESC",
  });

  const assignState = (stateUpdate: Partial<ConfigState>) => setConfigState({ ...configState, ...stateUpdate });

  useEffect(() => {
    updateTemplateContent({
      cards: {
        _index: {
          importZone: true,
        },
        _items: {
          importZone: {
            id: "importZone",

            x: 0,
            y: 0,
            width: 300,
            height: 300,

            importIssues: true,
            jql: configState.jql,
            jqlLayout: "random",
            jqlLimit: 25,
            siteId: configState.siteId,
          },
        },
      },
    });
  }, [configState]);

  if (sites.loading) {
    return <b>Loading...</b>;
  }

  if (!sites.result) {
    return <b>Error! Unable to fetch Jira sites.</b>;
  }

  const siteOptions = sites.result.map((site) => ({ label: site.name, value: site.id }));
  return (
    <ResizeContainer>
      <h3>Site</h3>
      <Select
        value={siteOptions.find((option) => option.value === configState.siteId)}
        options={siteOptions}
        // @ts-ignore
        onChange={(option) => assignState({ siteId: option?.value, projectId: null })}
      />
      <h3>Issues</h3>
      <Textfield
        isDisabled={!configState.siteId}
        value={configState.jql}
        onChange={(event) => assignState({ jql: (event.target as HTMLInputElement).value })}
      />
    </ResizeContainer>
  );
}
