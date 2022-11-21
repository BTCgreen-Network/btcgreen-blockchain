import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import BTCgreenIcon from './images/btcgreen.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={BTCgreenIcon} viewBox="0 0 150 58" {...props} />;
}
