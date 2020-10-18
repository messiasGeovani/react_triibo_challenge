import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CC;

  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: auto 85px;

  grid-template-areas: 'CM' 'MI';

  height: calc(100vh - 60px);

  & > div:first-child {
    grid-area: CM;

    display: flex;
    flex-direction: column;

    padding-left: 20px;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px gray;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 10px;
    }
  }
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 0;

  > div {
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    > strong: {
      font-size: 16px;
    }

    > p {
      margin-left: 7px;

      font-size: 13.5px;
      font-weight: lighter;
      opacity: 0.5;
    }
  }
`;
