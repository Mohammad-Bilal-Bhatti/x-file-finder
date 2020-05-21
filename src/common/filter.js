import _ from "lodash";
export default function(data, columnName, searchString) {
  return _.filter(data, row => {
    const result = row[columnName]
      .toLowerCase()
      .search(searchString.toLowerCase());
    return result === 0 ? true : false;
  });
}
