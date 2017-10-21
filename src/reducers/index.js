import {
  GET_POSTS,
  GET_CATEGORIES
} from '../actions'

const initialAppState = {
  lang: {
    react: null,
  },
  langtwo: {
    redux: null,
  },
  langthree: {
    udacity: null,
  },
}

function section (state = initialAppState, action) {
  const { post, categories } = action

  switch (action.type) {
    case: GET_POSTS :
      return {
        ...state,
        [post]: {
          ...state[post],
          [subject]: languague.label,
        }
      }
    case: GET_CATEGORIES :
      return {
        ..state,
        [categories]: {
          ...state[categories],
        [subject]: // ????????
        }
      }
    default :
    return state
  }
}

export default section
