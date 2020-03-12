import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_TRACKS':
      return action.payload;
    default: 
      return state;
  }
}

const fetchTracks = dispatch => async () => {
  const { data } = await trackerApi.get('/tracks');
  dispatch({ type: 'LOAD_TRACKS', payload: data })
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations })
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack,
  },
  [],
)