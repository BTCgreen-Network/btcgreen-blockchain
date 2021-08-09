import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.BTCHIA]: IS_MAINNET ? 'XBTC' : 'TXBTC',
};
