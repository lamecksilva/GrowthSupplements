import globalReducer, { IGlobalState, toggleLoading } from '../global';

describe('Global Reducer', () => {
  const initialState: IGlobalState = {
    appLoading: false,
  };

  it('should handle initial state', () => {
    const actual = globalReducer(undefined, { type: 'unknown' });

    expect(actual.appLoading).toEqual(false);
  });

  it('should toggle loading state to true', () => {
    const actual = globalReducer(initialState, toggleLoading());

    expect(actual.appLoading).toEqual(true);
  });

  it('should toggle loading state to false', () => {
    const actual = globalReducer(
      { ...initialState, appLoading: true },
      toggleLoading(),
    );

    expect(actual.appLoading).toEqual(false);
  });
});
