import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_JOBS,
  LIKE_JOB,
} from './types';

const JOB_QUERY_PARAMS ={
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q:'javascript'
}

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';


//helper
const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
}

// action creator
export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let  { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    // callback allows for navigating to the deck screen
    callback();
  } catch(e){
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
     payload: job,
     type: LIKE_JOB
  };
};

