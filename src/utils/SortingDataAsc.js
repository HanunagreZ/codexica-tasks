export default function sortingDataAsc(data, callback) {
  const sortedData = [...data];
  sortedData.sort((a, b) => a.name.localeCompare(b.name));
  callback(sortedData);
}
