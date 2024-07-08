export default function sortingDataDesc(data, callback) {
  const sortedData = [...data];
  sortedData.sort((a, b) => b.name.localeCompare(a.name));
  callback(sortedData);
}
