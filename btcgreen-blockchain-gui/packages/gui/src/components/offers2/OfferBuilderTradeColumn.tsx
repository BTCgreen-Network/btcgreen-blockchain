import { Flex } from '@btcgreen/core';
import { Offering, Requesting } from '@btcgreen/icons';
import { Trans } from '@lingui/macro';
import React from 'react';
import { useWatch } from 'react-hook-form';

import useOfferBuilderContext from '../../hooks/useOfferBuilderContext';
import OfferBuilderFeeSection from './OfferBuilderFeeSection';
import OfferBuilderHeader from './OfferBuilderHeader';
import OfferBuilderNFTSection from './OfferBuilderNFTSection';
import OfferBuilderTokensSection from './OfferBuilderTokensSection';
import OfferBuilderXBTCSection from './OfferBuilderXBTCSection';

function getTitle(offering = false, viewer = false, isMyOffer = false) {
  if (isMyOffer) {
    offering = !offering;
  }

  if (offering) {
    if (viewer) {
      return <Trans>You will give</Trans>;
    }

    return <Trans>Offering</Trans>;
  }

  if (viewer) {
    return <Trans>In exchange for</Trans>;
  }

  return <Trans>Requesting</Trans>;
}

function getSubTitle(offering = false, viewer = false, isMyOffer = false) {
  if (isMyOffer) {
    offering = !offering;
  }

  if (offering) {
    if (viewer) {
      return <Trans>Assets you will give</Trans>;
    }

    return <Trans>Assets I would like to trade</Trans>;
  }

  if (viewer) {
    return <Trans>Assets you will receive</Trans>;
  }

  return <Trans>Assets I would like to receive </Trans>;
}

function getIcon(offering = false, isMyOffer = false) {
  if (isMyOffer) {
    offering = !offering;
  }

  return offering ? <Offering fontSize="large" /> : <Requesting fontSize="large" />;
}

export type OfferBuilderTradeColumnProps = {
  name: string;
  offering?: boolean;
  viewer?: boolean;
  isMyOffer?: boolean;
};

export default function OfferBuilderTradeColumn(props: OfferBuilderTradeColumnProps) {
  const { name, offering = false, viewer = false, isMyOffer = false } = props;
  const { readOnly } = useOfferBuilderContext();

  const xbtc = useWatch({
    name: `${name}.xbtc`,
  });

  const nfts = useWatch({
    name: `${name}.nfts`,
  });

  const tokens = useWatch({
    name: `${name}.tokens`,
  });

  const showXBTC = !readOnly || !!xbtc.length;
  const showTokensSection = !readOnly || !!tokens.length;
  const showNFTSection = !readOnly || !!nfts.length;
  const showFeeSection = offering || viewer;

  const mutedXBTC = nfts.length || tokens.length;
  const mutedTokens = xbtc.length || nfts.length;
  const mutedNFTs = xbtc.length || tokens.length;

  return (
    <Flex flexDirection="column" gap={3}>
      <OfferBuilderHeader
        icon={getIcon(offering, isMyOffer)}
        title={getTitle(offering, viewer, isMyOffer)}
        subtitle={getSubTitle(offering, viewer, isMyOffer)}
      />
      <Flex
        flexDirection="column"
        flexGrow={1}
        gap={1}
        sx={{
          borderRadius: 2,
          backgroundColor: 'action.hover',
          border: '1px solid',
          borderColor: 'divider',
          padding: 1,
        }}
      >
        {showXBTC && <OfferBuilderXBTCSection name={`${name}.xbtc`} offering={offering} muted={mutedXBTC} />}

        {showTokensSection && (
          <OfferBuilderTokensSection name={`${name}.tokens`} offering={offering} muted={mutedTokens} />
        )}

        {showNFTSection && (
          <OfferBuilderNFTSection
            name={`${name}.nfts`}
            offering={offering}
            muted={mutedNFTs}
            viewer={viewer}
            isMyOffer={isMyOffer}
          />
        )}

        {showFeeSection && <OfferBuilderFeeSection name={`${name}.fee`} offering={offering} viewer={viewer} />}
      </Flex>
    </Flex>
  );
}
