import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    id: null,
    name: '',
    lastName: '',
    email: '',
    isAdmin: false,
    active: false,
  },
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = INITIAL_STATE;
        break;
      }
      default:
    }
  });
}
