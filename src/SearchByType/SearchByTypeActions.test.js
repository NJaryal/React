import {
  setSearchByTitle,
  setSearchByGenre,
  SET_SEARCH_BY_TITLE,
  SET_SEARCH_BY_GENRE,
} from './SearchByTypeActions';


describe('actions', () => {
  it('should create an action to SET_SEARCH_BY_TITLE', () => {
    const sortbyRating = '';
    const expectedAction = {
      type: SET_SEARCH_BY_TITLE,
    };
    expect(setSearchByTitle(sortbyRating)).toEqual(expectedAction);
  });
  it('should create an action to SET_SEARCH_BY_GENRE', () => {
    const sortbyRelease = '';
    const expectedAction = {
      type: SET_SEARCH_BY_GENRE,
    };
    expect(setSearchByGenre(sortbyRelease)).toEqual(expectedAction);
  });
});
