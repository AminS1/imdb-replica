import Favorites from "../components/pages/Favorites";
import Home from "../components/pages/Home";
import { Tab } from "./types";

export const Tabs: Tab[] = [
  {
    title: "IMDb",
    component: <Home />,
    path: "/",
  },
  {
    title: "Favorites",
    component: <Favorites />,
    path: "/favorites",
  },
];

export const ImageBaseUrl = "https://image.tmdb.org/t/p/w500";
