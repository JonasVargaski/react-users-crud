import styled from 'styled-components';

export default styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  width: 40px !important;
  height: 16px !important;
  border: 1px solid #aaa;
  border-radius: 2px;
  background: #ebebeb;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  transition: background 0.3s;
  box-sizing: border-box;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 14px;
    height: 14px;
    background: white;
    border: 1px solid #aaa;
    border-radius: 2px;
    transition: left 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  &:checked {
    background: #a6c7ff;
    border-color: #8daee5;
  }

  &:checked:after {
    left: 23px;
    border-color: #8daee5;
  }

  &:hover:not(:checked):not(:disabled):after,
  &:focus:not(:checked):not(:disabled):after {
    left: 0px;
  }

  &:hover:checked:not(:disabled):after,
  &:focus:checked:not(:disabled):after {
    left: 22px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
