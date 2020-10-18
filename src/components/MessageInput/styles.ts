import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MI;

  display: flex;

  align-items: center;
  justify-content: center;

  border-top: 1px solid black;

  > form {
    width: 97%;

    > input {
      width: 100%;
      height: 50px;

      padding-left: 15px;

      border: 2px solid var(--gray);
      border-radius: 5px;

      font-size: 17px;
    }
  }
`;
