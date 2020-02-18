import {
  updateSearchText,
  UPDATE_SEARCH_TEXT,
} from './SearchActions';

describe('actions', () => {
  it('should UPDATE_SEARCH_TEXT ', () => {
    const searchText = 'Tomb';
    const expectedAction = {
      type: UPDATE_SEARCH_TEXT,
      searchText,
    };
    expect(updateSearchText(searchText)).toEqual(expectedAction);
  });
});

