import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  font-size: 14px !important;
  padding: 5px 2px 0;
  font-weight: 400 !important;
  color: #2d2f31;
  width: max-content;
  display: flex;
  align-items: center;
  user-select:none;
  opacity: ${({ disabled }) => disabled && 0.4}}
  ${({ disabled }) => (disabled ? 'cursor:not-allowed' : 'cursor:pointer')}

  span {
    position: relative;
    display: block;
    float: left;
    margin: 0 5px 0 0;
    width: 18px;
    height: 18px;
    border: 2px solid #aaa;
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 2.7px;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #a6c7ff;
      transform: scale(0);
      transition: all 0.2s ease;
      opacity: 0.08;
      pointer-events: none;

      &:hover {
        transform: scale(3.6);
      }
    }
  }
  input {
    display: none;
  }

  input[type='radio']:checked + span {
    border-color: #8daee5;

    &:after {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
      opacity: 1;
    }
  }
`;
