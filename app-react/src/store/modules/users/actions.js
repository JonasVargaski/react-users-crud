export function saveUserRequest(data) {
  return {
    type: '@users/SAVE_USER_REQUEST',
    payload: { data },
  };
}

export function saveUserSuccess(user) {
  return {
    type: '@users/SAVE_USER_SUCCESS',
    payload: { user },
  };
}

export function getUsersRequest(data) {
  return {
    type: '@users/GET_USERS_REQUEST',
    payload: { data },
  };
}

export function getUsersSuccess(users, totalItens) {
  return {
    type: '@users/GET_USERS_SUCCESS',
    payload: { users, totalItens },
  };
}

export function updateUserRequest(data) {
  return {
    type: '@users/UPDATE_USER_REQUEST',
    payload: { data },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@users/UPDATE_USER_SUCCESS',
    payload: { user },
  };
}

export function removeUserRequest(data) {
  return {
    type: '@users/REMOVE_USER_REQUEST',
    payload: { data },
  };
}

export function removeUserSuccess(id) {
  return {
    type: '@users/REMOVE_USER_SUCCESS',
    payload: { id },
  };
}
