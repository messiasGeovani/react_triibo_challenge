/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const CHANGE_CHANNEL = (dispatch: any, id: string, name: string): void =>
  dispatch({
    type: 'CHANGE_CHANNEL',
    id,
    name,
  });
