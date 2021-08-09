import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.BTCGREEN]: IS_MAINNET ? 'XBTC' : 'TXBTC',
};
