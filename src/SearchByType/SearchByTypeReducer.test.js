import SearchByTypeReducer from './SearchByTypeReducer';

describe('SearchByTypeReducer reducer', () => {
  it('should return default state', () => {
    const newState = SearchByTypeReducer(undefined, {});
    expect(newState).toEqual({
      activeSearch: 'title',
    });
  });
});
