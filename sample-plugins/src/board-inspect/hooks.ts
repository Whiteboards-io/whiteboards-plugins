import { useEffect, useState, useRef, useCallback } from "react";
import {
  CardData,
  LineData,
  watchCardData,
  watchCardsIndex,
  watchJiraIssueData,
  watchLineData,
  watchLinesIndex,
} from "@whiteboards-io/plugins";
import { JiraIssueData } from "../../../lib/abstract-whiteboards-plugin";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useWatchObjectData<T = CardData | LineData | JiraIssueData>(
  objectId: unknown,
  watchFn: typeof watchCardData | typeof watchLineData | typeof watchJiraIssueData
) {
  const [data, setData] = useState<CardData | LineData | JiraIssueData | null>(null);

  useEffect(() => {
    // @ts-ignore
    return watchFn(objectId, (data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}

export function useWatchIndexData(watchFn: typeof watchCardsIndex | typeof watchLinesIndex) {
  const [data, setData] = useState<string[]>();

  useEffect(() => {
    return watchFn((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}

export function useGetValue<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return useCallback(() => ref.current, []);
}
