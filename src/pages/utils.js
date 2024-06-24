export const getTopFavoriteItems = (data, n) => {
    const sortedItems = data.list.sort((a, b) => b.favoriteCount - a.favoriteCount);
    return sortedItems.slice(0, n);
  };
  