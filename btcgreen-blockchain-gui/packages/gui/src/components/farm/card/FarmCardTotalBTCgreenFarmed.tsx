import { useGetFarmedAmountQuery } from '@btcgreen/api-react';
import { useCurrencyCode, mojoToBTCgreenLocaleString, CardSimple, useLocale } from '@btcgreen/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardTotalBTCgreenFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalBTCgreenFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToBTCgreenLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple title={<Trans>Total BTCgreen Farmed</Trans>} value={totalBTCgreenFarmed} loading={isLoading} error={error} />
  );
}
