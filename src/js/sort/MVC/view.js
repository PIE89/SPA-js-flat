export function render() {
  const markup = `
  <div class="view-options-wrapper" id="viewOptionsWrapper">
    <div class="container">
        <div class="view-options">
            <div class="view-options__sort">
                <label for="sort-cards-by" class="view-options__label">Сортировать</label>
                <select id="sort-cards-by" name="sortby" id="" class="view-options__select">
                    <option value="priceASC">по цене ↑</option>
                    <option value="priceDESC">по цене ↓</option>
                    <option value="squareASC">по площади ↑</option>
                    <option value="squareDESC">по площади ↓</option>
                </select>
            </div>
            <div class="view-options__type">
                <input type="radio" class="view-options__radio" name="displayType" id="displayCards" value="cards" checked/>
                <label for="displayCards" class="view-options__type-item">
                    <i class="fas fa-th-large"></i>
                </label>
                <input type="radio" class="view-options__radio" name="displayType" id="displayList" value="list"/>
                <label for="displayList" class="view-options__type-item">
                    <i class="fas fa-bars"></i>
                </label>
            </div>
        </div>
    </div>
</div>
<div id="row"></div>`;

  document.querySelector("#app").insertAdjacentHTML("beforeend", markup);
}
