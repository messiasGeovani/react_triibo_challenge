/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Container } from './styles';

export default function ChannelName() {
  const currentChannel = useSelector(
    (state: RootStateOrAny) => state.channelReducer,
  );

  return (
    <Container>
      <h3>
        {currentChannel.id === '' || currentChannel.name === ''
          ? 'Select a channel'
          : `#${currentChannel.name}`}
      </h3>
    </Container>
  );
}
