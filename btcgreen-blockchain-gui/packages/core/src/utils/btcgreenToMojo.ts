import Big from 'big.js';
import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function btcgreenToMojo(btcgreen: string | number | Big): number {
  return btcgreenFormatter(btcgreen, Unit.BTCGREEN)
    .to(Unit.MOJO)
    .toNumber();
}