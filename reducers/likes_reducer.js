import _ from 'lodash';
import {
  LIKE_JOB,
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_JOB:
      console.log(action.payload);
      console.log("IN LIKES_REDUCER");
      return _.uniqBy([
        action.payload, ...state
      ],'jobkey')    
    default:
      return state;
  }
}