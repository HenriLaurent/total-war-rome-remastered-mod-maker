import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Units, { loader as unitsLoader } from "./routes/units";
import Unit, { loader as unitLoader } from "./routes/unit";
import ModTabMenu from "./routes/mod";
import Factions, { loader as factionLoader } from "./routes/mod/factions";
import Settlements, {
  loader as settlementsLoader,
} from "./routes/mod/settlements";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "mod",
        element: <ModTabMenu />,
        children: [
          {
            path: "factions",
            element: <Factions />,
            loader: factionLoader,
          },
          {
            path: "units",
            element: <Units />,
            loader: unitsLoader,
          },
          {
            path: "units/:unit",
            element: <Unit />,
            loader: unitLoader,
          },
          {
            path: "settlements",
            element: <Settlements />,
            loader: settlementsLoader,
          },
        ],
      },
    ],
  },
]);
