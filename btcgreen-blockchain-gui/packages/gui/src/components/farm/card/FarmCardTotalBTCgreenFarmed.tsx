import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToBTCgreenLocaleString, CardSimple } from '@btcgreen/core';
import { useGetFarmedAmountQuery } from '@btcgreen/api-react';

export default function FarmCardTotalBTCgreenFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalBTCgreenFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToBTCgreenLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total BTCgreen Farmed</Trans>}
      value={totalBTCgreenFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
