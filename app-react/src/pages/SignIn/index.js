import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '~/components/DefaultStyle';
import spinner from '~/assets/loading-bubbles.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(3, 'Necessário minimo 3 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Senha de Acesso" />

      <button type="submit">
        {loading ? (
          <>
            <img src={spinner} alt="loader" />
            Carregando...
          </>
        ) : (
          'Acessar'
        )}
      </button>
      <Link to="/register">Criar conta gratuita</Link>
    </Form>
  );
}
