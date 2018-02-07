import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme for React 16.x
Enzyme.configure({ adapter: new Adapter() });
