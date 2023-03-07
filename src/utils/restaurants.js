export const getFavoriteRestaurants = (restaurants, favorites) =>
  restaurants.filter(restaurant => favorites?.includes(restaurant.name))

export const getFeaturedRestaurants = restaurants => restaurants.filter(restaurant => restaurant.featured)
export const getFastestRestaurants = restaurants => {
  const sortedByAvgTimeRestaurants = [...restaurants].sort((a, b) => a.avgTime - b.avgTime)
  return sortedByAvgTimeRestaurants.slice(0, 5)
}
