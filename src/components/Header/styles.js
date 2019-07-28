import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 20px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  button {
    width: 70px;
    height: 42px;
    border: 0;
    background: #d44059;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
