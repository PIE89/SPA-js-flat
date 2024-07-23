export function render() {
  const markup = ` 
	<div class="container p-0 mb-5">
        <div class="heading-1">Заявки</div>
	</div>


    <div class="panels-wrapper">
        <div class="container p-0" id="bidsContainer"></div>
    </div>`;

  document.querySelector("#app").innerHTML = markup;
}

export function renderBid(info) {
  const bidsInfo = `<div class="panel panel--no-hover">
                        <div class="id">${info.id}</div>
                        <div class="panel__bidname">${info.name}</div>
                        <div class="panel__bidphone">${info.phone}</div>
                    </div>`;

  document
    .querySelector("#bidsContainer")
    .insertAdjacentHTML("afterbegin", bidsInfo);
}
