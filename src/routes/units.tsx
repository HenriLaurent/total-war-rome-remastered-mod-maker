import { Link, useLoaderData } from "react-router-dom";
import { Faction, Unit } from "../types";
import { getUnits } from "../api/units";
import FilterUnitsByFaction from "../components/02_molecules/FilterUnitsByFaction";
import { useState } from "react";
import { getFactions } from "../api/factions";

type LoaderData = {
  units: Unit[];
  factions: Faction[];
};

export async function loader() {
  const units = await getUnits();
  const factions = await getFactions();
  return { units, factions };
}

export default function Units() {
  const { units, factions } = useLoaderData() as LoaderData;
  const defaultSelectedFactions = factions.map((faction) => ({
    name: faction.name,
    isSelected: true,
  }));
  const [selectedFactions, setSelectedFactions] = useState<
    { name: string; isSelected: boolean }[]
  >(defaultSelectedFactions);

  const filteredUnits = units.filter((unit) =>
    selectedFactions.some((item) =>
      unit.ethnicity.some((e) => e.faction === item.name && item.isSelected)
    )
  );
  return (
    <div className="flex flex-col gap-8 my-8 max-w-7xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-cinzel font-semibold">Units list</h1>
        <FilterUnitsByFaction
          factions={selectedFactions}
          handleChange={(factionName) =>
            setSelectedFactions((prev) => {
              return prev.map((f) => {
                if (f.name === factionName) {
                  return { ...f, isSelected: !f.isSelected };
                } else return f;
              });
            })
          }
        />
      </div>
      <ul className="grid grid-cols-8 gap-8">
        {filteredUnits.map((unit) => {
          return unit.ethnicity.map((e, index) => {
            if (
              selectedFactions.some((f) => f.name === e.faction && f.isSelected)
            ) {
              return (
                <Link
                  to={`/mod/units/${unit.dictionary}`}
                  className="relative bg-cover rounded-lg min-h-56 flex flex-col justify-center shadow-md cursor-pointer p-4 hover:scale-105 duration-300"
                  style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
                >
                  <li className="flex flex-col items-center gap-2">
                    <img
                      key={index}
                      src={`/assets/unit_icons/${e.faction}/${unit.dictionary}_info.png`}
                      className="w-20"
                    />
                    <p className="text-xs font-semibold text-center font-cinzel">
                      {unit.type.charAt(0).toUpperCase() + unit.type.slice(1)}
                    </p>
                  </li>
                  <img
                    src={`/assets/faction_icons/${e.faction}.png`}
                    className="absolute w-6 h-6 top-2 right-2"
                  />
                </Link>
              );
            }
          });
        })}
      </ul>
    </div>
  );
}
