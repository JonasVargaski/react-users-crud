import styled from 'styled-components';

export const Header = styled.div`
  height: 60px;
  width: 100%;
  background: #fff;
  border-bottom: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;

  span {
    font-size: 16px;
  }

  div {
    display: flex;
  }
`;

export const TableAction = styled.div`
  display: flex;

  button {
    border: none;
    background: none;

    &:hover svg {
      transform: scale(1.27);
    }
  }
  svg {
    transition: all 0.2s;
    margin: 0 7px;
  }
`;
