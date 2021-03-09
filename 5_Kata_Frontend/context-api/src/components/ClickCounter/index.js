// Forma 1
import ClickCounter from './ClickCounter';
import CounterHoC from '../../CounterHoC';

export default CounterHoC(ClickCounter);

// Forma 2
// export { default } from './ClickCounter';