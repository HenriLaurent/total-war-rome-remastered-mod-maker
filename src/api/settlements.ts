import regionsData from "../data/regions.json";
import { Region } from "../types/index"; // Assuming we've put the Unit type in a separate file

export async function getRegions(): Promise<Region[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const regions = regionsData as Region[];

  return regions;
}
