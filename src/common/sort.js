import _ from "lodash";

export default function(data, columnName, asc = true) {
  return asc
    ? _.sortBy(data, columnName)
    : _.sortBy(data, columnName).reverse();
}
