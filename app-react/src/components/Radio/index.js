import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Radio({ label, ...rest }) {
  return (
    <Container {...rest}>
      <input type="radio" {...rest} />
      <span />
      {label}
    </Container>
  );
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
};
