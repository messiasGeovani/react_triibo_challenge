/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Channel } from './styles';

import api from '../../utils/api.json';

import { CHANGE_CHANNEL } from '../../store/actions/channelActions';

export default function ChannelList() {
  const [channelMessages, setChannelMessages] = useState(api.messages);
  const [channelNotifications, setChannelNotifications] = useState<boolean[]>(
    [],
  );

  const { channels: channelList } = api;

  const dispatch = useDispatch();

  const setSelectedChannel = (event: any) => {
    const unreadMessages = channelMessages.filter(
      message => message.is_unread === true,
    );
    const updatedMessageReadStatus = unreadMessages.map(unreadMessage => {
      return { ...unreadMessage, is_unread: false };
    });

    event.target.style.backgroundColor = 'var(--secondary)';

    setChannelMessages([...channelMessages, ...updatedMessageReadStatus]);

    channelList.forEach(channel => {
      const channelElement = document.getElementById(channel.id);
      const isClickInside = channelElement?.contains(event.target);

      if (!isClickInside && channelElement) {
        channelElement.style.fontWeight = '400';
        channelElement.style.backgroundColor = '';
      }
    });
  };

  const channelConfig = (channel: any, index: number) => {
    removeChannelNotification(index);
    CHANGE_CHANNEL(dispatch, channel.id, channel.name);
  };

  const channelHasUnreadMessages = (channelId: string) => {
    const currentMessages: Array<any> = channelMessages.filter(
      message => message.channel_id === channelId,
    );
    const unreadMessages = currentMessages.filter(
      channelMessage => channelMessage.is_unread === true,
    );

    return unreadMessages && unreadMessages.length;
  };

  const removeChannelNotification = (notificationIndex: number) => {
    const currentnotifications: boolean[] = [...channelNotifications];
    currentnotifications[notificationIndex] = false;

    setChannelNotifications(currentnotifications);
  };

  useEffect(() => {
    const channelNotificationStatus: boolean[] = [];

    channelList.forEach(channel => {
      const currentChannelMessages: Array<any> = channelMessages.filter(
        message => message.channel_id === channel.id,
      );
      const unreadMessages = currentChannelMessages.filter(
        channelMessage => channelMessage.is_unread === true,
      );

      channelNotificationStatus.push(unreadMessages.length > 0 && true);
    });

    setChannelNotifications(channelNotificationStatus);
  }, []);

  return (
    <Container>
      <h3>XYZ Company</h3>
      <div>
        <span>Channels</span>
        <ol>
          {channelList.map((channel, index) => (
            <Channel
              id={channel.id}
              key={channel.id}
              onClick={setSelectedChannel}
              onClickCapture={() => channelConfig(channel, index)}
              hasNotification={channelNotifications[index]}
              unreadMessages={channelHasUnreadMessages(channel.id)}
            >
              {channel.name}
            </Channel>
          ))}
        </ol>
      </div>
    </Container>
  );
}
