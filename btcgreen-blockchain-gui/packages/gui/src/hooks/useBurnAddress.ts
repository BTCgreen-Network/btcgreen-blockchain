import { toBech32m } from '@btcgreen/api';
import { useCurrencyCode } from '@btcgreen/core';
import { useMemo } from 'react';

export default function useBurnAddress(): string | undefined {
  const feeUnit = useCurrencyCode();

  const retireAddress = useMemo(() => {
    if (!feeUnit) {
      return;
    }

    return toBech32m('000000000000000000000000000000000000000000000000000000000000dead', feeUnit);
  }, [feeUnit]);

  return retireAddress;
}
