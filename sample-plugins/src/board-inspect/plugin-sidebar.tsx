import React, { useState } from "react";
import Button from "@atlaskit/button";
import {
  setCardData,
  setLineData,
  watchCardData,
  watchCardsIndex,
  watchJiraIssueData,
  watchLineData,
  watchLinesIndex,
} from "@whiteboards-io/plugins";
import { useWatchIndexData, useWatchObjectData } from "./hooks";
import JsonEditor from "./json-editor";

export default function PluginSidebar() {
  const cardIds = useWatchIndexData(watchCardsIndex);
  const lineIds = useWatchIndexData(watchLinesIndex);

  const [object, setObject] = useState<null | ["card", string] | ["line", string]>();

  if (object) {
    return (
      <>
        <h1 style={{ marginLeft: "40px", marginTop: "0px" }}>Board inspect</h1>
        <div style={{ position: "absolute", right: 0, top: 0 }}>
          <Button onClick={() => setObject(null)}>Back</Button>
        </div>
        {object?.[0] === "card" ? (
          <CardView cardId={object?.[1]} />
        ) : object?.[0] === "line" ? (
          <LineView lineId={object?.[1]} />
        ) : null}
      </>
    );
  }

  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Board inspect</h1>
      {cardIds && (
        <>
          <h2>Cards</h2>
          <ul>
            {cardIds.map((cardId) => (
              <CardLink key={cardId} cardId={cardId} onClick={() => setObject(["card", cardId])} />
            ))}
          </ul>
        </>
      )}
      {lineIds && (
        <>
          <h2>Lines</h2>
          <ul>
            {lineIds.map((lineId) => (
              <LineLink key={lineId} lineId={lineId} onClick={() => setObject(["line", lineId])} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function CardView({ cardId }: { cardId: string }) {
  const cardData = useWatchObjectData(cardId, watchCardData);
  return (
    <>
      <h2>Card: {cardId}</h2>
      <JsonEditor value={cardData} onChange={(value) => setCardData(cardId, value)} />
      {cardData?.siteId && cardData?.issueId && (
        <IssueDataView siteId={cardData?.siteId as string} issueId={cardData?.issueId as number} />
      )}
    </>
  );
}

function IssueDataView({ issueId, siteId }: { issueId: number; siteId: string }) {
  const issueData = useWatchObjectData({ issueId, siteId }, watchJiraIssueData);

  return (
    <>
      <h2>
        Issue: {issueId}@{siteId}
      </h2>
      <JsonEditor value={issueData} />
    </>
  );
}

function LineView({ lineId }: { lineId: string }) {
  const lineData = useWatchObjectData(lineId, watchLineData);
  return (
    <>
      <h2>Line: {lineId}</h2>
      <JsonEditor value={lineData} onChange={(value) => setLineData(lineId, value)} />
    </>
  );
}

function CardLink({ cardId, onClick }: { cardId: string; onClick: () => void }) {
  return (
    <li data-card-id={cardId}>
      <Button appearance="link" onClick={onClick}>
        {cardId}
      </Button>
    </li>
  );
}

function LineLink({ lineId, onClick }: { lineId: string; onClick: () => void }) {
  return (
    <li data-line-id={lineId}>
      <Button appearance="link" onClick={onClick}>
        {lineId}
      </Button>
    </li>
  );
}
