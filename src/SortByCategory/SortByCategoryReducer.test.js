import SortByCategoryReducer from './SortByCategoryReducer';

describe('SortByCategoryReducer reducer', () => {
  it('should return default state', () => {
    const newState = SortByCategoryReducer(undefined, {});
    expect(newState).toEqual({
      activeSort: 'release',
    });
  });
});
