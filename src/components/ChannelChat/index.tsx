/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useRef } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Container, MessageWrapper } from './styles';

import api from '../../utils/api.json';
import MessageInput from '../MessageInput';

export default function ChannelChat() {
  const [currentMessages, setCurrentMessages] = useState<any>([]);
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const currentChannel = useSelector(
    (state: RootStateOrAny) => state.channelReducer,
  );

  const setChannelMessages = () => {
    const channelMessages: Array<any> = api.messages.filter(
      (channelMessage: Record<string, unknown>) =>
        channelMessage.channel_id === currentChannel.id,
    );

    const channelUsers: Array<any> = api.users.filter(
      (channelUser: Record<string, unknown>) =>
        channelMessages.map(
          (channelMessage: Record<string, unknown>) =>
            channelUser.id === channelMessage.user_id,
        ),
    );

    const messages: Array<any> = [];

    channelMessages.forEach((channelMessage: Record<string, unknown>) => {
      channelUsers.forEach((channelUser: Record<string, unknown>) => {
        if (channelUser.id === channelMessage.user_id)
          messages.push({
            ...channelMessage,
            user_info: channelUser,
          });
      });
    });

    setCurrentMessages(messages);
  };

  useEffect(() => {
    const div = messageRef.current;

    if (div) div.scrollTop = div.scrollHeight;
  });

  useEffect(() => {
    setChannelMessages();
  }, [currentChannel]);

  return (
    <Container>
      <div ref={messageRef}>
        {currentChannel.id !== '' &&
          currentChannel.name !== '' &&
          currentMessages.map((currentMessage: any) => (
            <MessageWrapper>
              <div>
                <strong>{currentMessage.user_info.username}</strong>
                <p>{currentMessage.timestamp}</p>
              </div>
              <p>{currentMessage.content}</p>
            </MessageWrapper>
          ))}
      </div>

      <MessageInput
        updateMessages={setCurrentMessages}
        currentMessages={currentMessages}
      />
    </Container>
  );
}
