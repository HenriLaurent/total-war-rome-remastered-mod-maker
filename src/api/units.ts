import unitsData from "../data/units.json";
import { Unit } from "../types/index"; // Assuming we've put the Unit type in a separate file

export async function getUnits(): Promise<Unit[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Type assertion to ensure the imported data matches our Unit type
  const units = unitsData as Unit[];

  // You could add error handling or data validation here if needed

  return units;
}
