import { createSlice } from 'redux-starter-kit';

/// Reducers
const slice = createSlice({
  slice: 'lastError',
  initialState: null,
  reducers: {
    clearLastError() {
      return null;
    },
    setLastError(state, action) {
      return action.payload;
    }
  }
});

export default slice.reducer;

/// actions
export const { clearLastError, setLastError } = slice.actions;

/// selectors
export const { getLastError } = slice.selectors;
