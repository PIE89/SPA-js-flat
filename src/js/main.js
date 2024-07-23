import homePage from "./pages/homePage";
import singleItemPage from "./pages/singleItemPage";
import favouritesPage from "./pages/favouritesPage";
import bidsPage from "./pages/bidsPage";
import errorPage from "./pages/errorPage";
import EventEmitter from "./utils/EventEmitter";
import { Favourites } from "./favourites/favouritesModel";

const state = {
  results: [],
  emitter: new EventEmitter(),
  favourites: new Favourites(),
  displayFormat: "cards",
};

window.state = state;

const routes = [
  { path: "/", component: homePage },
  { path: "item", component: singleItemPage },
  { path: "favourites", component: favouritesPage },
  { path: "bids", component: bidsPage },
];

function findComponentByPath(path, routes) {
  return routes.find((route) => route.path === path);
}

function router() {
  const path = location.hash.split("/");

  let currentPath = path[0] === "" ? "/" : path[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  //cосхранение параметров для роутера
  state.routeParams = path[2] ? path[2] : "";

  const { component = errorPage } =
    findComponentByPath(currentPath, routes) || {};

  component(state);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
