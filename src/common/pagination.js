import _ from "lodash";
function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

function genPageNumbers(totalItems, pageSize) {
  const stop = Math.ceil(totalItems / pageSize + 1);
  return _.range(1, stop);
}

export default { genPageNumbers, paginate };
