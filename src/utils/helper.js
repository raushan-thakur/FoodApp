export function filterData(searchInput, restaurants) {
  return restaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}
