import factionsData from "../data/factions.json";
import { Faction } from "../types/index"; // Assuming we've put the Unit type in a separate file

export async function getFactions(): Promise<Faction[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Type assertion to ensure the imported data matches our Unit type
  const factions = factionsData as Faction[];

  // You could add error handling or data validation here if needed

  return factions;
}
