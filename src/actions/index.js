  export const GET_CATEGORIE = 'GET_CATEGORIE'; //
  export const GET_POST_CATEGORIE = 'GET_POST_CATEGORIE'; //
  export const GET_POST = 'GET_POST'; //
  export const ADD_POST = 'ADD_POST'; //
  export const POST_BY_ID = 'POST_BY_ID'; //
  export const VOTE_ON_POST = 'VOTE_ON_POST';
  export const EDIT_POST = 'EDIT_POST';
  export const DELETE_POST = 'DELETE_POST';
  export const GET_COMMENT = 'GET_COMMENT';
  export const ADD_COMMENT = 'ADD_COMMENT';
  export const EDIT_COMMENT = 'EDIT_COMMENT';
  export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';
  export const DELETE_COMMENT = 'DELETE_COMMENT';

  const BASE_URL = 'http://localhost:3001';

//use to text fetch calls!
//fetch('http://localhost:3001/categories');


//  export const getCategories = () => ({
//    type: GET_CATEGORIE,
//    categories
//  });

//  export const getPostCategorie = post => ({
//    type: GET_POST_CATEGORIE,
//    post
//  });

//  export const getPosts = posts => ({
//    type: GET_POSTS,
//    posts
//  });

//  export const addPost = posts => ({
//    type: ADD_POST,
//    posts
//  });

  export const postById = postID => ({
    type: POST_BY_ID,
    postID
  });



  export const getCategories = () => {
    return dispatch => {
      fetch(`${BASE_URL}/categories`, {
        method: "GET",
        headers: {'Authorization': `whatever-you-want`, 'Content-type': `appication/json`}
      }).then(res => res.json())
        .then(categories => dispatch(getCategories)) // this is the same function as on line 50 but here you call the function on top?
        .then(categories => dispatch({ type: GET_CATEGORIE, categories })) // read line 49 for all of the examples.
    }
  }

  export const getPostCategorie = posts => {
    return dispatch => {
      fetch(`${BASE_URL}/:category/posts`, {
        method: "GET",
        headers: {'Authorization': `whatever-you-want`, 'Content-type': `appication/json`}
      }).then(res => res.json())
        .then(posts => dispatch(getPostCategorie))
        .then(posts => dispatch({ type: GET_POST_CATEGORIE, posts }))
    }
  }

  export const getPosts = () => {
    return dispatch => {
      fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(posts => dispatch(getPosts(posts))
        .then(posts => dispatch({ type: GET_POST, posts }))
    }
  }

  export const addPost = posts => {
    return dispatch => {
      fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(post => dispatch(addPost(post))
        .then(post => dispatch({ type: ADD_POST, posts }))
    }
  }

  export const postById = postID {  // could it just be id? Ask on the correct format
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "GET",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(postById))
        .then(postID => dispatch({ type:POST_BY_ID, postID }))
    }
  }
