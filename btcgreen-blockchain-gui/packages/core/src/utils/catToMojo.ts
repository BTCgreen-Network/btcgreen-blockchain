import Big from 'big.js';
import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return btcgreenFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}