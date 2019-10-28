import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 25px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #999;

      &:hover {
        color: #fff;
        opacity: 0.85;
      }
    }
  }

  button {
    height: 42px;
    width: 71px;
    border: none;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
