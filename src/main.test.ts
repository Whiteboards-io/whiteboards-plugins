import * as api from "./main";
import AbstractWhiteboardsPlugin from "./abstract-whiteboards-plugin";

test("all methods were exported", () => {
  const checkApi: AbstractWhiteboardsPlugin = api;
  expect(checkApi).not.toBe(null);
});
