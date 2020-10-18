import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CN;

  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);

  display: flex;

  align-items: center;

  > h3 {
    margin-left: 20px;

    font-size: 20px;
  }
`;
