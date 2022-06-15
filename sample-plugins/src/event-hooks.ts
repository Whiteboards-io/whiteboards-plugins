import { useEffect, useRef, useState } from "react";

import { isEqual, isArray } from "lodash";

export function useDocumentEvent<T extends Event>(
  eventName: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions
) {
  return useEvent(document, eventName, callback, options);
}

export function useEvent<T extends Event>(
  node: EventTarget,
  eventName: string,
  callback: (event: T) => void,
  options?: boolean | AddEventListenerOptions
) {
  const callbackRef = useRef(callback);
  const [localOptions, setLocalOptions] = useState(options);

  useEffect(() => {
    if (!isEqual(options, localOptions)) {
      setLocalOptions(options);
    }
  }, [localOptions, options]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!node) {
      return;
    }

    const listener = (event: Event) => {
      callbackRef.current?.(event as T);
    };
    node.addEventListener(eventName, listener, localOptions);
    return () => node.removeEventListener(eventName, listener, localOptions);
  }, [eventName, localOptions, node]);
}

export function useKeyDownEvent(
  keyNamesOrCodes: string | string[] | number | number[],
  callback: (event: KeyboardEvent) => void,
  useCapture = false
) {
  const keyNamesOrCodesArray = isArray(keyNamesOrCodes) ? keyNamesOrCodes : [keyNamesOrCodes];
  return useDocumentEvent(
    "keydown",
    (event: KeyboardEvent) => {
      keyNamesOrCodesArray.some((keyNameOrCode) => [event.key, event.keyCode].includes(keyNameOrCode)) &&
        callback(event);
    },
    useCapture
  );
}

export function useKeyUpEvent(keyNameOrCode: string | number, callback: (event: KeyboardEvent) => void) {
  return useDocumentEvent("keyup", (event: KeyboardEvent) => {
    [event.key, event.keyCode].includes(keyNameOrCode) && callback(event);
  });
}

export function dispatchDocumentEvent<T>(name: string, properties?: T, document = window.document) {
  const event = new CustomEvent(name, { detail: { ...properties } });
  document.dispatchEvent(event);
}
