export default function sortingDataAsc(data, callback) {
  const sortedData = { ...data };
  sortedData.results.sort((a, b) => a.name.localeCompare(b.name));
  callback(sortedData);
}
