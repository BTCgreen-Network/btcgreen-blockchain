import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return btcgreenFormatter(cat, Unit.CAT).to(Unit.MOJO).toBigNumber();
}
