import produce from 'immer';

const INITIAL_STATE = {
  users: [],
  totalItens: 0,
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/GET_USERS_SUCCESS': {
        draft.users = action.payload.users;
        draft.totalItens = action.payload.totalItens;
        break;
      }
      case '@users/SAVE_USER_SUCCESS': {
        const { user } = action.payload;
        draft.users.unshift(user);
        draft.totalItens += 1;
        break;
      }
      case '@users/UPDATE_USER_SUCCESS': {
        const { user } = action.payload;
        const userIndex = draft.users.findIndex(d => d.id === user.id);
        draft.users.splice(userIndex, 1, user);
        break;
      }
      case '@users/REMOVE_USER_SUCCESS': {
        const { id } = action.payload;
        const userIndex = draft.users.findIndex(d => d.id === id);
        draft.users.splice(userIndex, 1);
        draft.totalItens -= 1;
        break;
      }
      default:
    }
  });
}
