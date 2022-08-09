import { useMemo } from 'react';
import type { Wallet } from '@btcgreen/api';
import { WalletType } from '@btcgreen/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToBTCgreenLocaleString, useLocale } from '@btcgreen/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();
  
  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToBTCgreenLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
