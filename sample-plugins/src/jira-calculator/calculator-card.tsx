import { useWatchIndexData, useWatchObjectData } from "../board-inspect/hooks";
import { CardData, JiraIssueData, watchCardData, watchCardsIndex, watchJiraIssueData } from "@whiteboards-io/plugins";
import { dispatchDocumentEvent, useDocumentEvent } from "../event-hooks";
import { useEffect, useState } from "react";

export default function CalculatorCard() {
  const cardIds = useWatchIndexData(watchCardsIndex);

  return (
    <>
      <h3>Calculator</h3>
      <Calculator />
      {cardIds?.map((cardId) => (
        <CardWatch key={cardId} cardId={cardId} />
      ))}
    </>
  );
}

type JiraIssueDataEvent = { issueId: string; siteId: string; jiraIssueData: JiraIssueData | null };

function Calculator() {
  const [issueSprints, setIssueSprints] = useState<
    Record<string, { sprints: Record<string, any>; storyPoints: number | null }>
  >({});

  useDocumentEvent<CustomEvent<JiraIssueDataEvent>>("jiraIssueData", (event) => {
    const { jiraIssueData, issueId } = event.detail;
    // @ts-ignore
    const sprints = Object.values(jiraIssueData?.data?.versionedRepresentations?.["customfield_10020"] || {})[0] as any;
    // @ts-ignore
    const storyPoints = Object.values(jiraIssueData?.data?.versionedRepresentations?.["customfield_10026"] || {})[0] as
      | number
      | null;
    setIssueSprints((issueSprints) => ({ ...issueSprints, [issueId]: { sprints, storyPoints } }));
  });

  const stats: Record<string, number> = {};
  for (const [, { sprints, storyPoints }] of Object.entries(issueSprints)) {
    if (!storyPoints) {
      continue;
    }

    for (const sprint of Object.values(sprints || {})) {
      stats[sprint.name] = (stats[sprint.name] || 0) + storyPoints;
    }
  }

  return <pre>{JSON.stringify(stats, null, 4)}</pre>;
}

function CardWatch({ cardId }: { cardId: string }) {
  const cardData = useWatchObjectData<CardData>(cardId, watchCardData);

  if (!cardData?.issueId || !cardData?.siteId) {
    return null;
  } else {
    return <JiraIssueDataWatch issueId={cardData.issueId as string} siteId={cardData.siteId as string} />;
  }
}

function JiraIssueDataWatch({ issueId, siteId }: { issueId: string; siteId: string }) {
  const jiraIssueData = useWatchObjectData<JiraIssueData>({ issueId, siteId }, watchJiraIssueData);

  useEffect(() => {
    dispatchDocumentEvent<JiraIssueDataEvent>("jiraIssueData", {
      issueId,
      siteId,
      jiraIssueData,
    });
  }, [issueId, siteId, jiraIssueData]);

  return null;
}
