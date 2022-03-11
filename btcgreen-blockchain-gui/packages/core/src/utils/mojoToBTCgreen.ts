import Big from 'big.js';
import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function mojoToBTCgreen(mojo: string | number | Big): number {
  return btcgreenFormatter(mojo, Unit.MOJO)
    .to(Unit.BTCGREEN)
    .toNumber();
}