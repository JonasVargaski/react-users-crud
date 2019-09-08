import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  removeUserSuccess,
  updateUserSuccess,
  getUsersSuccess,
  saveUserSuccess,
} from './actions';

export function* removeUser({ payload }) {
  try {
    const userId = payload.data;

    yield call(api.delete, `users/${userId}`);

    yield put(removeUserSuccess(userId));

    toast.success('Usuário removido com sucesso!');
  } catch (err) {
    toast.error('Erro ao remover usuário, tente novamente.');
  }
}

export function* updateUser({ payload }) {
  try {
    const {
      id,
      name,
      lastName,
      password,
      email,
      isAdmin,
      active,
    } = payload.data;

    const user = {
      id,
      name,
      lastName,
      password,
      email,
      isAdmin,
      active,
    };

    yield call(api.put, `users/${user.id}`, user);

    yield put(updateUserSuccess(user));

    toast.success('Usuário atualizado com sucesso!');
  } catch (err) {
    toast.error('Erro ao atualizar usuário, confira seus dados.');
  }
}

export function* saveUser({ payload }) {
  try {
    const { name, lastName, password, email, isAdmin, active } = payload.data;

    const user = {
      name,
      lastName,
      password,
      email,
      isAdmin,
      active,
    };

    const response = yield call(api.post, `users`, user);
    const newUser = response.data;

    yield put(saveUserSuccess(newUser));

    toast.success('Usuário adicionado com sucesso!');
  } catch (err) {
    toast.error('Erro ao salvar usuário, tente novamente.');
  }
}

export function* getUsers({ payload }) {
  try {
    const { page, userSearch } = payload.data;

    const response = yield call(
      api.get,
      `users?_page=${page + 1}&q=${userSearch}&_limit=10`
    );

    const totalItens = response.headers['x-total-count'];
    const users = response.data;

    yield put(getUsersSuccess(users, totalItens));
  } catch (err) {
    toast.error('Erro de conexão, tente mais tarde.');
  }
}

export default all([
  takeLatest('@users/REMOVE_USER_REQUEST', removeUser),
  takeLatest('@users/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@users/SAVE_USER_REQUEST', saveUser),
  takeLatest('@users/GET_USERS_REQUEST', getUsers),
]);
