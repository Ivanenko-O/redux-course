import { createSelector } from 'reselect';

// во вторую функцию передаем результат первой
export const getAuthenticated = createSelector((auth) => auth, (auth) => auth.get('authenticated'));