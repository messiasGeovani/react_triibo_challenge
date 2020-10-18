/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Container } from './styles';

interface MessageInputProps {
  updateMessages: any;
  currentMessages: Array<any>;
}

export default function MessageInput({
  updateMessages,
  currentMessages,
}: MessageInputProps) {
  const [message, setMessage] = useState<string>('');
  const currentChannel = useSelector(
    (state: RootStateOrAny) => state.channelReducer,
  );

  const handleInputChange = (event: any) => setMessage(event.target.value);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    const date = new Date();

    const getCurrentTime = () => {
      const hour = date.getHours();
      const minutes = date.getMinutes();

      const period = hour > 12 ? 'PM' : 'AM';

      return `${hour > 12 ? hour - 12 : hour}:${
        minutes.toString().length < 2 ? `0${minutes}` : minutes
      } ${period}`;
    };

    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: `${getCurrentTime()}`,
      content: message,
      user_info: {
        id: '13486524',
        username: 'triibo_dev',
      },
    };

    updateMessages([...currentMessages, newMessage]);
    setMessage('');
  };

  return (
    <Container>
      {currentChannel.id !== '' && currentChannel.name !== '' && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Message channel"
            required
          />
        </form>
      )}
    </Container>
  );
}
