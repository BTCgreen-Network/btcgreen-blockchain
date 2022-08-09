import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@btcgreen/core';
import { useGetTotalHarvestersSummaryQuery } from '@btcgreen/api-react';

export default function FarmCardPlotCount() {
  const { plots, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Plot Count</Trans>}
      value={<FormatLargeNumber value={plots} />}
      loading={isLoading}
    />
  );
}
