import sinon from 'sinon';
import { moviesData as api } from '../../api/index';
export { fetchProducts } from './index';

describe('Saga Api', () => {
  it('Call generators', async (assert) => {
    const dispatched = [];
    sinon.stub(api, 'sagaApi').callsFake(() => ({
      json: () => ({
        data: 'value',
      }),
    }));
    const url = 'https://reactjs-cdp.herokuapp.com/movies/';
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    }, fetchProducts, url).toPromise();

    assert.true(api.calledWith(url, somethingFromState({ state: 'test' })));
    assert.deepEqual(dispatched, [moviesData({ some: 'value' })]);
  });
});
