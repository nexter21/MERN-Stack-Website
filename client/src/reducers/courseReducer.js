import {
  GET_VIDEOS,
  REFRESH_STATE,
  GET_COURSES,
  GET_TOPICS
} from "../actions/types";

const initialState = {
  videos: [],
  courses: [],
  topics: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    case REFRESH_STATE:
      return {
        ...state,
        videos: action.payload
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload.items
      };
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload.videos
      };
    default:
      return state;
  }
}
