import axios from 'axios';
import { setLastError } from './error.state';

const API_URL = 'https://jsonplaceholder.typicode.com/';

export default function fetchData({
  route,
  params,
  isLoading,
  dataLoaded,
  loadError,
  beforeFetch,
  afterSuccess
}) {
  if (!isLoading || !dataLoaded || !loadError) {
    throw new Error(
      'Actions for isLoading, dataLoaded, and loadError are required'
    );
  }

  return async dispatch => {
    if (beforeFetch) {
      dispatch(beforeFetch());
    }

    dispatch(isLoading(true));
    dispatch(loadError(null));

    try {
      const response = await axios.get(`${API_URL}${route}`, params);

      dispatch(dataLoaded(response.data));
      if (afterSuccess) {
        dispatch(afterSuccess(response));
      }
    } catch (err) {
      dispatch(loadError(err.message));
      dispatch(setLastError(err.message)); //for global error handling
    }

    dispatch(isLoading(false));
  };
}
