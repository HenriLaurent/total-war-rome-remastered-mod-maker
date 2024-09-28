import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Units, { loader as unitsLoader } from "./routes/units";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "units",
        element: <Units />,
        loader: unitsLoader,
      },
    ],
  },
]);
