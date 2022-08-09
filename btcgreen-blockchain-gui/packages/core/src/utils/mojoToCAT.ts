import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function mojoToCAT(mojo: string | number | BigNumber): BigNumber {
  return btcgreenFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toBigNumber();
}