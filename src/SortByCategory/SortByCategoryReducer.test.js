import SortByCategoryReducer from './SortByCategoryReducer';
import {
  SET_SORT_BY_RATING,
  SET_SORT_BY_RELEASEDATE,
} from './SortByCategoryActions';

describe('SortByCategoryReducer reducer', () => {
  it('should return default state', () => {
    const newState = SortByCategoryReducer(undefined, {});
    expect(newState).toEqual({
      activeSort: 'release',
    });
  });

  it('should handle Active Sorting', () => {
    expect(
      SortByCategoryReducer([], {
        type: SET_SORT_BY_RELEASEDATE,
        activeSort: 'release',
      }),
    ).toEqual(
      {
        activeSort: 'release',
      },
    );

    expect(
      SortByCategoryReducer([],
        {
          type: SET_SORT_BY_RATING,
          activeSort: 'rating',
        }),
    ).toEqual(
      {
        activeSort: 'rating',
      },
    );
  });
});
