function filterByPriceASC(result) {
  result.sort((a, b) => {
    return +a.price_total - +b.price_total;
  });
}

function filterByPriceDESC(result) {
  result.sort((a, b) => {
    return +b.price_total - +a.price_total;
  });
}

function filterBySquareASC(result) {
  result.sort((a, b) => {
    return +a.square - +b.square;
  });
}

function filterBySquareDESC(result) {
  result.sort((a, b) => {
    return +b.square - +a.square;
  });
}

export {
  filterByPriceASC,
  filterByPriceDESC,
  filterBySquareASC,
  filterBySquareDESC,
};
