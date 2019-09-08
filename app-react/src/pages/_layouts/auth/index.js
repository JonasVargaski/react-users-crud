import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Card } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Card>
        <Content>
          <h1>Área do Usuário</h1>
          {children}
        </Content>
      </Card>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
