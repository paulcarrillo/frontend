export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POST_BY_CATEGORIES = 'POST_BY_CATEGORIES';
export const GET_ALL_POST = 'GET_ALL_POSTS';
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const POST_BY_ID = 'POST_BY_ID';
export const VOTE_ON_POST = 'VOTE_ON_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';




const BASE_URL = 'http://localhost:3001';

export const setPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getPosts = () => {
  return dispatch => {
    fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
    }).then(res => res.json()))
    .then(posts => dispatch(setPost(posts)))
    // .then(posts => dispatch({ type: GET_POSTS, posts })
  }
}


export const posts = post => (
    {
      type: GET_POSTS,
      post
    }
  )
