import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdClose } from 'react-icons/md';

import { Container } from './styles';

export default function InputSearch({ handleChange }) {
  const [value, setValue] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    handleChange(value);
  }

  function handleClearSearch() {
    setValue('');
    handleChange('');
  }

  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Buscar usuário"
      />
      <button type="submit" onClick={handleSearch}>
        <MdSearch size={22} />
      </button>
      {value.length ? (
        <button type="button" onClick={handleClearSearch}>
          <MdClose size={22} />
        </button>
      ) : null}
    </Container>
  );
}

InputSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
