import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import RegionMap from "../../components/03_organisms/RegionMap";
import { Region } from "../../types";
import Tooltip from "../../components/02_molecules/Tooltip";
import { getRegions } from "../../api/settlements";

type LoaderData = {
  regions: Region[];
};

export async function loader() {
  const regions = await getRegions();
  return { regions };
}

export default function Settlements() {
  const navigate = useNavigate();
  const { regions } = useLoaderData() as LoaderData;
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState<
    { name: string; capital: string; iconPath: string } | undefined
  >(undefined);

  const handleOnHover = (rgb: { r: number; g: number; b: number }) => {
    const matchedRegion = regions.find(
      (region) =>
        region.color.r === rgb.r &&
        region.color.g === rgb.g &&
        region.color.b === rgb.b
    );
    setCurrentHoveredRegion(
      matchedRegion
        ? {
            name: matchedRegion.regionName,
            capital: matchedRegion.capital,
            iconPath: `/assets/faction_icons/${matchedRegion.faction}.png`,
          }
        : undefined
    );
  };

  const handleOnClick = (rgb: { r: number; g: number; b: number }) => {
    const matchedRegion = regions.find(
      (region) =>
        region.color.r === rgb.r &&
        region.color.g === rgb.g &&
        region.color.b === rgb.b
    );
    if (!matchedRegion) return;
    navigate(`/mod/settlements/${matchedRegion.regionName}`);
  };

  if (regions.length === 0) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col gap-8">
        <div className="relative">
          <RegionMap
            onClick={handleOnClick}
            onHover={(rgb) => handleOnHover(rgb)}
            onLeftHover={() => setCurrentHoveredRegion(undefined)}
          />
          <Tooltip isVisible={currentHoveredRegion !== undefined}>
            {currentHoveredRegion && (
              <div className="flex gap-4">
                <img
                  src={currentHoveredRegion.iconPath}
                  className="w-8 h-8"
                  alt={`${currentHoveredRegion.name} icon`}
                />
                <div>
                  <p className="text-base font-cinzel font-semibold">
                    {currentHoveredRegion.capital}
                  </p>
                  <p className="text-sm font-crimsontext text-gray-600 italic">
                    {currentHoveredRegion.name}
                  </p>
                </div>
              </div>
            )}
          </Tooltip>
        </div>

        <div>
          <h1 className="text-3xl font-cinzel font-semibold mb-8">
            List of cities
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {regions.map((region) => (
              <li key={region.regionName}>
                <Link to={`/mod/settlements/${region.regionName}`}>
                  <div
                    className="bg-cover bg-center min-h-24 rounded-lg shadow-md hover:scale-105 duration-300 p-4 cursor-pointer flex items-center gap-2"
                    style={{
                      backgroundImage: `url("/assets/ui/bg_paper.png")`,
                    }}
                  >
                    <img
                      src={`/assets/faction_icons/${region.faction}.png`}
                      className="w-8 h-8"
                      alt={`${region.faction} icon`}
                    />
                    <div>
                      <p className="text-base font-cinzel font-semibold">
                        {region.capital}
                      </p>
                      <p className="text-sm font-crimsontext text-gray-600 italic">
                        {region.regionName}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
