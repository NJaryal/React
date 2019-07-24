import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/* xpect.addSnapshotSerializer(createSerializer({mode: 'deep'})); 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));  */
