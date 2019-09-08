import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '~/components/DefaultStyle';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'No mínimo 3 caracteres')
    .required('O nome é obrigatório'),
  lastName: Yup.string()
    .min(3, 'No mínimo 3 caracteres')
    .required('O sobrenome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(3, 'No mínimo 3 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, lastName, email, password }) {
    dispatch(signUpRequest(name, lastName, email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Seu nome" />
      <Input name="lastName" type="text" placeholder="Seu sobrenome" />
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua senha secreta" />

      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
