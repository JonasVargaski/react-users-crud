import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.profile.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <h3>Gerenciar usuários</h3>
        <Profile>
          <img
            src={`http://api.adorable.io/avatar/${userProfile.name}`}
            alt="Avatar"
          />
          <div>
            {`${userProfile.name} ${userProfile.lastName}`}
            {userProfile.isAdmin && <p>Administrador</p>}
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
