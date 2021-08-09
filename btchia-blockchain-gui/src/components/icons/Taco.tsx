import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as BTChiaIcon } from './images/btchia.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={BTChiaIcon} viewBox="0 0 150 58" {...props} />;
}
