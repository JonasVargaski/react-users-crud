import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 510px;
  margin: 0 20px;
  height: 560px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.6);
  background: #fefefe;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 26px;
    position: absolute;
    line-height: 26px;
    top: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 320px;

    input {
      height: 52px;
      margin: 0 0 16px;
      font-size: 15px;
    }

    button {
      margin: 22px 0 0;
      height: 44px;
      background: rgb(69, 122, 183);
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, 'rgb(69, 122, 183)')};
      }
    }

    a {
      color: #888;
      margin-top: 29px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
