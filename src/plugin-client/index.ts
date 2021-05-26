import { v4 as uuidv4 } from "uuid";

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

export async function waitForExecution(executionId: string, executionTimeout: number | null = 10000): Promise<unknown> {
  let listener, timeout;

  const result = new Promise((resolve, reject) => {
    listener = (event: MessageEvent) => {
      const message = JSON.parse(event.data);
      if (message.executionId === executionId) {
        resolve(message.payload);
      }
    };
    window.addEventListener("message", listener);
    if (executionTimeout) {
      timeout = setTimeout(reject, executionTimeout);
    }
  });

  try {
    return await result;
  } finally {
    if (listener) {
      window.removeEventListener("message", listener);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}
