import styled from 'styled-components';

interface ChannelListStyleProps {
  hasNotification: boolean;
  unreadMessages?: number;
}

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 20px 0 0 20px;

  color: white;
  background-color: var(--primary);

  > h3 {
    font-size: 20px;
  }

  > div {
    margin-top: 15px;

    > span {
      font-weight: 700;
    }

    > ol {
      list-style-type: none;

      > li {
        border-radius: 5px;

        + li {
          margin-top: 3px;
        }
      }
    }
  }
`;

export const Channel = styled.li<ChannelListStyleProps>`
  cursor: pointer;

  padding: 5px; 0;

  &:first-child {
    margin-top: 10px;
  }

  &::before {
    content: '#';
    float: left;
    width: 17px;
  }

  &::after {
    transition: opacity .12s;

    content: '${({ unreadMessages }) => unreadMessages}';
    text-align: center;

    font-size: 13px;
    font-weight: 700;
    
    width: 17px;
    height: 17px;

    display: inline-block;

    opacity: ${({ hasNotification }) => (hasNotification ? '1' : '0')};
      
    margin-left: 7px;

    border-radius: 5px;
    
    position: relative;
    top: -2px;

    color: white;
    background-color: red;
  }

  &:hover {
    background-color: #848484;
  }
`;
