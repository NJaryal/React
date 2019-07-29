import SearchReducer from './SearchReducer';

describe('SearchReducer reducer', () => {
  it('should return default state', () => {
    const newState = SearchReducer(undefined, {});
    expect(newState).toEqual({
      inputs: '',
    });
  });
});
