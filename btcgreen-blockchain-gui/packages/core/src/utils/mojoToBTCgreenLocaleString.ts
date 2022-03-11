import Big from 'big.js';
import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function mojoToBTCgreenLocaleString(mojo: string | number | Big) {
  return btcgreenFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.BTCGREEN)
    .toLocaleString();
}