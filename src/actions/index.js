  export const GET_CATEGORIE = 'GET_CATEGORIE'; //
  export const GET_POST_CATEGORIE = 'GET_POST_CATEGORIE'; //
  export const GET_POST = 'GET_POST'; //
  export const ADD_POST = 'ADD_POST'; //
  export const POST_BY_ID = 'POST_BY_ID'; //
  export const VOTE_ON_POST_UP = 'VOTE_ON_POST_UP'; //
  export const VOTE_ON_POST_DOWN = 'VOTE_ON_POST_DOWN'; //
  export const EDIT_POST = 'EDIT_POST'; //
  export const DELETE_POST = 'DELETE_POST'; //
  export const GET_COMMENT = 'GET_COMMENT'; //
  export const ADD_COMMENT = 'ADD_COMMENT'; //
  export const EDIT_COMMENT = 'EDIT_COMMENT'; //
  export const VOTE_ON_COMMENT_UP = 'VOTE_ON_COMMENT_UP'; //
  export const VOTE_ON_COMMENT_DOWN = 'VOTE_ON_COMMENT_DOWN'; //
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

//  export const postById = postID => ({
//    type: POST_BY_ID,
//    postID
//  });

//  export const voteOnPostUp = postID => ({
//    type: VOTE_ON_POST_UP,
//    postID
//  });

//  export const voteOnPostUp = postID => ({
//    type: VOTE_ON_POST_UP,
//    postID
//  });

//  export const editPost = post => ({
//    type: EDIT_POST,
//    post
//  });

//  export const deletePost = postID => ({
//    type: DELETE_POST,
//    post
//  });

//  export const getComment = postID => ({
//    type: GET_COMMENT,
//    postID
//  });

//  export const addComment = comment => ({
//    type: ADD_COMMENT,
//    comment
//   });

//    export const editComment = comment => ({
//      type: EDIT_COMMENT,
//      comment
//    });

//    export const voteOnCommentUp = commentID => ({
//      type: VOTE_ON_COMMENT_UP,
//      commentID
//    });

//    export const voteOnCommentDown = commentID => ({
//      type: VOTE_ON_COMMENT_DOWN,
//      commentID
//    });

//      export const deleteComment = commentID => ({
//        type: DELETE_COMMENT,
//        commentID
//      });

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
        .then(posts => dispatch(getPosts))
        .then(posts => dispatch({ type: GET_POST, posts }))
    }
  }

  export const addPost = posts => {
    return dispatch => {
      fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(post => dispatch(addPost))
        .then(post => dispatch({ type: ADD_POST, posts }))
    }
  }

  export const postById = postID => {  // could it just be id? Ask on the correct format
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "GET",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(postById))
        .then(postID => dispatch({ type: POST_BY_ID, postID }))
    }
  }

  export const voteOnPostUp = postID => {
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(voteOnPostUp))
        .then(postID => dispatch({ type: VOTE_ON_POST_UP, postID }))
    }
  }

  export const voteOnPostDown = postID => {
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(voteOnPostDown))
        .then(postID => dispatch({ type: VOTE_ON_POST_DOWN, postID }))
    }
  }

  export const editPost = posts => {
    return disptach => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "PUT",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(posts => dispatch(editPost))
        .then(posts => dispatch({ type: EDIT_POST, posts }))
    }
  }

  export const deletePost = postID => {
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id`, {
        method: "DELETE",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(deletePost))
        .then(postID => dispatch({ type: DELETE_POST, postID}))
    }
  }

  export const getComment = postID => {
    return dispatch => {
      fetch(`${BASE_URL}/posts/:id/comments`, {
        method: "GET",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(postID => dispatch(getComment))
        .then(postID =>dispatch({ type: "GET_COMMENT", postID}))
    }
  }

  export const addComment = comment => {
    return disptach => {
      fetch(`${BASE_URL}/comments`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(comment => dispatch(addComment))
        .then(comment => dispatch({ type: ADD_COMMENT, comment}))
    }
  }

  export const editComment = comment => {
    return dispatch => {
      fetch(`${BASE_URL}/comments/:id`, {
        method: "PUT",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(comment => dispatch(editComment))
        .then(comment => disptach({ type: EDIT_COMMENT, comment}))
    }
  }

  export const voteOnCommentUp = commentID => {
    return disptach => {
      fetch(`${BASE_URL}/comments/:id`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(commentID => dispatch(voteOnCommentUp))
        .then(commentID => dispatch({ type: VOTE_ON_COMMENT_UP, commentID}))
    }
  }

  export const voteOnCommentDown = commentID => {
    return disptach => {
      fetch(`${BASE_URL}/comments/:id`, {
        method: "POST",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(commentID => dispatch(voteOnCommentDown))
        .then(commentID => dispatch({ type: VOTE_ON_COMMENT_DOWN, commentID}))
    }
  }

  export const deleteComment = commentID => {
    return dispatch => {
      fetch(`${BASE_URL}/comments/:id`, {
        method: "DELETE",
        headers: { 'Authorization': 'whatever-you-want', 'Content-type': 'application/json'}
      }).then(res => res.json())
        .then(commentID => dispatch(deleteComment))
        .then(commentID => disptach({ type: DELETE_COMMENT, commentID}))
    }
  }
