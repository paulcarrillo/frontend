export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getPosts = post => ({
  type: GET_POSTS,
  post
});

export function getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});
