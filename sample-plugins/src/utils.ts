import { Viewport, getViewport } from "@whiteboards-io/plugins";

export async function getCurrentViewport() {
  const { zoom, rectX, rectY, rectMaxX, rectMaxY }: Viewport = await getViewport();
  return { zoom, location: [(rectX + rectMaxX) / 2, (rectY + rectMaxY) / 2] as [number, number] } as const;
}
