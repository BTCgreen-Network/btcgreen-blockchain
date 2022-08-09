import { WalletType } from '@btcgreen/api';
import type { Wallet } from '@btcgreen/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'BTCgreen';
    default:
      return wallet.name;
  }
}
