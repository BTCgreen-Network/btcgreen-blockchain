import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function btcgreenToMojo(btcgreen: string | number | BigNumber): BigNumber {
  return btcgreenFormatter(btcgreen, Unit.BTCGREEN).to(Unit.MOJO).toBigNumber();
}
