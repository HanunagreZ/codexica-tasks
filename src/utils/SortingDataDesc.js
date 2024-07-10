export default function sortingDataDesc(data, callback) {
  const sortedData = { ...data };
  sortedData.results.sort((a, b) => b.name.localeCompare(a.name));
  callback(sortedData);
}
