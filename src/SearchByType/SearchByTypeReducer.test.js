import SearchByTypeReducer from './SearchByTypeReducer';
import {
  SET_SEARCH_BY_TITLE,
  SET_SEARCH_BY_GENRE,
} from './SearchByTypeActions';

describe('SearchByTypeReducer reducer', () => {
  it('should return default state', () => {
    const newState = SearchByTypeReducer(undefined, {});
    expect(newState).toEqual({
      activeSearch: 'title',
    });
  });

  it('should handle Active Search', () => {
    expect(
      SearchByTypeReducer([], {
        type: SET_SEARCH_BY_TITLE,
        activeSearch: 'title',
      }),
    ).toEqual(
      {
        activeSearch: 'title',
      },
    );

    expect(
      SearchByTypeReducer([],
        {
          type: SET_SEARCH_BY_GENRE,
          activeSearch: 'genre',
        }),
    ).toEqual(
      {
        activeSearch: 'genre',
      },
    );
  });
});
