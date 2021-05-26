import {v4 as uuidv4} from "uuid";
import {HostMessage} from "../abstract-whiteboards-plugin";

export function pluginToHost(action: string, payload: unknown = undefined): string {
  const executionId = uuidv4();

  window.parent.postMessage(
    JSON.stringify({
      executionId,
      action: action,
      payload,
    }),
    "*"
  );

  return executionId;
}

export function onHostToPlugin(callback: (message: HostMessage) => void): () => void {
  const listener = (event: MessageEvent) => {
    try {
      const message = JSON.parse(event.data);
      if (message.action) {
        console.debug("Host to plugin", message);
        callback(message);
      }
    } catch (e) {
      // skip
    }
  };
  window.addEventListener("message", listener);

  return () => {
    window.removeEventListener("message", listener);
  };
}

export async function waitForExecution(executionId: string, executionTimeout: number | null = 10000): Promise<unknown> {
  let cancel: (() => void) | undefined;
  let timeout = null;

  const result = new Promise((resolve, reject) => {
    cancel = onHostToPlugin((message) => {
      if (message.executionId === executionId) {
        resolve(message.payload);
      }
    });
    if (executionTimeout) {
      timeout = setTimeout(reject, executionTimeout);
    }
  });

  try {
    return await result;
  } finally {
    if (cancel) {
      cancel();
    }
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}
