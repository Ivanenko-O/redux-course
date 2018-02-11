import { createSelector } from 'reselect';

// мемоизация
// вырезаем из posts из state
const getPostsFromState = (state) => state.posts;

// во вторую функцию передаем результат первой
export const getPosts = createSelector(getPostsFromState, (posts) => posts.toJS());