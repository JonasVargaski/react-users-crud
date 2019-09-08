import styled from 'styled-components';

export const Container = styled.form`
  height: 35px;
  border: none;
  position: relative;

  button {
    background: none;
    border: none;
    position: absolute;
    right: 6px;
    top: 6px;
    margin-right: 11px;
    svg {
      color: #999;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  button + button {
    right: 29px;
  }

  input {
    height: 35px;
    border: none;
    padding: 0 3px;
    border-bottom: 2px solid #eee;
    margin-right: 16px;
    padding: 0 46px 0 0;
  }
`;
