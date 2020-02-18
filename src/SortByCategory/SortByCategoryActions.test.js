import {
  setSortByRating,
  setSortByReleaseDate,
  SET_SORT_BY_RATING,
  SET_SORT_BY_RELEASEDATE,
} from './SortByCategoryActions';

describe('actions', () => {
  it('should create an action to SET_SORT_BY_RATING', () => {
    const sortbyRating = '';
    const expectedAction = {
      type: SET_SORT_BY_RATING,
    };
    expect(setSortByRating(sortbyRating)).toEqual(expectedAction);
  });
  it('should create an action to SET_SORT_BY_RELEASEDATE', () => {
    const sortbyRelease = '';
    const expectedAction = {
      type: SET_SORT_BY_RELEASEDATE,
    };
    expect(setSortByReleaseDate(sortbyRelease)).toEqual(expectedAction);
  });
});
