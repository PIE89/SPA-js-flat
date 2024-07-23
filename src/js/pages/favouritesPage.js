import { favPage } from "../favPage";
import { sort } from "../sort";

async function favouritesPage(state) {
  document.querySelector("#app").innerHTML = "";
  sort(state);
  await favPage(state);
}

export default favouritesPage;
