import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(250, 250, 250, 1);
  grid-area: header;
  border-bottom: 1px solid #e2e4ed;
`;

export const Content = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 300;
    font-style: normal;
    font-size: 27px;
    text-align: left;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  border-left: 1px solid #eee;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #bbb;
    margin: 4px 12px;
  }

  div {
    text-align: left;
    line-height: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    p {
      margin: 0;
      font-size: 12px;
    }

    button {
      background: none;
      border: none;
      font-size: 12px;
      color: #999;
    }
  }
`;
