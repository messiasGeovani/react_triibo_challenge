import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;
  grid-template-rows: 60px auto;

  // CL = channel list
  // CN = channel name
  // CC = channel chat

  grid-template-areas:
    'CL CN'
    'CL CC';

  height: 100vh;
`;
