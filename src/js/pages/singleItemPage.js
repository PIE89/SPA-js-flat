import { singleItem } from "../singleItem";

function singleItemPage(state) {
  document.querySelector("#app").innerHTML = "";
  singleItem(state);
}

export default singleItemPage;
