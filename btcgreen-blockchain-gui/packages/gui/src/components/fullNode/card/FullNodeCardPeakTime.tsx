import React from 'react';
import { Trans } from '@lingui/macro';
import { CardSimple } from '@btcgreen/core';
import moment from 'moment';
import { useGetLatestPeakTimestampQuery } from '@btcgreen/api-react';

export default function FullNodeCardPeakTime() {
  const { data: timestamp, isLoading, error } = useGetLatestPeakTimestampQuery();

  const value = timestamp
    ? moment(timestamp * 1000).format('LLL')
    : '';

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Last Transaction Block Time</Trans>}
      tooltip={<Trans>This is the timestamp of the most recent transaction block.</Trans>}
      value={value}
      error={error}
    />
  );
}
