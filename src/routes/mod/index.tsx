import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Link, Outlet, useLocation } from "react-router-dom";

const tabs = [
  {
    name: "Factions",
    path: "/mod/factions",
  },
  {
    name: "Units",
    path: "/mod/units",
  },
  {
    name: "Settlements",
    path: "/mod/settlements",
  },
];

export default function ModTabMenu() {
  const location = useLocation();

  const currentTabIndex = tabs.findIndex((tab) =>
    location.pathname.includes(tab.path)
  );
  return (
    <div className="max-w-7xl mx-auto">
      <TabGroup
        selectedIndex={currentTabIndex !== -1 ? currentTabIndex : 0}
        className="w-full"
      >
        <TabList className="flex space-x-1 rounded-xl bg-yellow-700/20 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.path}
              as={Link}
              to={tab.path}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-yellow-700 text-center
               ${
                 selected
                   ? "bg-yellow-900 text-white shadow"
                   : "text-blue-100 hover:bg-yellow-900/10 hover:text-yellow-900"
               }`
              }
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2">
          {tabs.map((tab) => (
            <TabPanel key={tab.path}>
              <Outlet />
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
