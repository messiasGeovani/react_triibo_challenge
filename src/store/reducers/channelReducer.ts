const INITIAL_STATE = {
  id: '',
  name: '',
};

interface ChatReducerOptions {
  type: string;
  id: string;
  name: string;
}

export default function chatReducer(
  state = INITIAL_STATE,
  action: ChatReducerOptions,
): Record<string, unknown> {
  switch (action.type) {
    case 'CHANGE_CHANNEL':
      return { id: action.id, name: action.name };
    default:
      return state;
  }
}
