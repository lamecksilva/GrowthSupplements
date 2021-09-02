import globalReducer, { IGlobalState, toggleLoading } from './global';

describe('Global Reducer', () => {
  const initialState: IGlobalState = {
    appLoading: false,
  };

  it('should handle initial state ', () => {
    expect(globalReducer(undefined, { type: 'unknown' })).toEqual({
      appLoading: false,
    });
  });

  it('should toggle loading state to true', () => {
    expect(globalReducer(initialState, toggleLoading())).toEqual({
      appLoading: true,
    });
  });

  it('should toggle loading state to false', () => {
    const actual = globalReducer(
      { ...initialState, appLoading: true },
      toggleLoading(),
    );

    expect(actual.appLoading).toEqual(false);
  });
});
