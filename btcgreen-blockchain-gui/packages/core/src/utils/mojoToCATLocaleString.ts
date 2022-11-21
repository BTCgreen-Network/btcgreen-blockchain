import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import btcgreenFormatter from './btcgreenFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return btcgreenFormatter(mojo, Unit.MOJO).to(Unit.CAT).toLocaleString(locale);
}
