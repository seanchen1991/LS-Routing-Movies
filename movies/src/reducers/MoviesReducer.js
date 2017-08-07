import { GET_MOVIES } from '../actions';
import { ADD_MOVIE } from '../actions';

export default (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload.data;
    case ADD_MOVIE:
      return action.payload.data;
    default:
      return movies;
  }
};
