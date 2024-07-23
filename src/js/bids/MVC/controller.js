import * as view from "./view";
import * as model from "./model";

async function controller() {
  view.render();
  const data = await model.getBids();
  data.forEach((info) => {
    view.renderBid(info);
  });
}

export { controller };
