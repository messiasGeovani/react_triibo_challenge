/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react';

import { Grid } from './styles';

import ChannelChat from '../ChannelChat';
import ChannelList from '../ChannelList';
import ChannelName from '../ChannelName';

export default function Layout() {
  return (
    <Grid>
      <ChannelList />
      <ChannelName />
      <ChannelChat />
    </Grid>
  );
}
