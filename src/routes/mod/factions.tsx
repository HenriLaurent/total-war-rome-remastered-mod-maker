import { Link, useLoaderData } from "react-router-dom";
import { getFactions } from "../../api/factions";
import { Faction as FactionType } from "../../types";

type LoaderData = {
  factions: FactionType[];
};

export async function loader() {
  const factions = await getFactions();
  return { factions };
}

export default function Factions() {
  const { factions } = useLoaderData() as LoaderData;
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-cinzel font-semibold">Factions list</h1>
      </div>
      <ul className="grid grid-cols-4 gap-8 my-8">
        {factions.map((faction) => (
          <Link
            key={faction.name}
            to="/mod/factions"
            className="bg-cover bg-center rounded-lg shadow-md hover:scale-105 duration-300 cursor-pointer"
            style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
          >
            <li className="flex rounded-lg gap-4 p-4">
              <img
                src={faction.logos["loading screen icon"]}
                className="w-16 h-16"
              />
              <div>
                <p className="text-lg font-cinzel font-semibold">
                  {faction.name}
                </p>
                <div className="text-xs font-notoserif flex flex-col">
                  {faction.description}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
