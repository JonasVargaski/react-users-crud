import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  height: 56px;
  background-color: rgb(57, 69, 84);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  h2 {
    color: #fff;
    font-weight: 200;
  }
  svg {
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
`;

export const Label = styled.label`
  margin: 7px;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 8px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 490px;
  padding: 14px;
  background: #fff;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    input {
      margin-bottom: 14px;
      width: 100%;
    }
  }
`;

export const DialogActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    height: 32px;
    margin-right: 8px;
  }
`;
