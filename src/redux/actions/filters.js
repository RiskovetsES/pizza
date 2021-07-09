export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = (catName) => ({
  type: 'SET_CATEGORY',
  payload: catName,
});
