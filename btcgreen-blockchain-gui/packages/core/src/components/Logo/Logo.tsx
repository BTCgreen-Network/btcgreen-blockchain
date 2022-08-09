import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { BTCgreen } from '@btcgreen/icons';

const StyledBTCgreen = styled(BTCgreen)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledBTCgreen />
    </Box>
  );
}
