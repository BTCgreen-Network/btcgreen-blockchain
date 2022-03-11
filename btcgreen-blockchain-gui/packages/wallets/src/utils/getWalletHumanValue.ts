import type { Wallet } from '@btcgreen/api';
import { WalletType } from '@btcgreen/api';
import { mojoToCATLocaleString, mojoToBTCgreenLocaleString } from '@btcgreen/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToBTCgreenLocaleString(value);
}
