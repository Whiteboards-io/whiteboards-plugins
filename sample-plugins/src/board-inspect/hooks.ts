import { useEffect, useState, useRef, useCallback } from "react";
import {
  CardData,
  LineData,
  watchCardData,
  watchCardsIndex,
  watchLineData,
  watchLinesIndex,
} from "@whiteboards-io/plugins";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useWatchObjectData<T = CardData | LineData>(
  objectId: string,
  watchFn: typeof watchCardData | typeof watchLineData
) {
  const [data, setData] = useState<CardData | LineData | null>(null);

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