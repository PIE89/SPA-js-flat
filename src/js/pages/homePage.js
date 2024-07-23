import { filter } from "../filter";
import { listing } from "../listing";
import { sort } from "../sort";

async function homePage(state) {
  document.querySelector("#app").innerHTML = "";
  await filter(state);
  sort(state);

  listing(state);
}

export default homePage;
