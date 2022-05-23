import { onHostToPlugin, pluginToHost, waitForExecution } from "./index";
import { CancelCallback, HostMessage, UserData } from "../abstract-whiteboards-plugin";

export async function getCurrentBoardUser(): Promise<UserData> {
  return (await waitForExecution(pluginToHost("getCurrentBoardUser"))) as UserData;
}

export async function getBoardUsers(): Promise<UserData[]> {
  return (await waitForExecution(pluginToHost("getBoardUsers"))) as UserData[];
}

export function watchBoardUsers(callback: (usersData: UserData[]) => void): CancelCallback {
  const executionId = pluginToHost("watchBoardUsers");

  const cancel = onHostToPlugin<UserData[]>((message: HostMessage<UserData[]>) => {
    if (message.executionId === executionId) {
      callback(message.payload);
    }
  });

  return () => {
    cancel();
    pluginToHost("cancelBoardUsersWatch", { executionId });
  };
}
