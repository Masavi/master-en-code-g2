// Forma 1
import ClickCounter from './ClickCounter';
import WithCounter from '../../hocs/WithCounter';

export default WithCounter(ClickCounter);

// Forma 2
// export { default } from './ClickCounter';