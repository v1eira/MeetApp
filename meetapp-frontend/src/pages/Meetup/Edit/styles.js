import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 940px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
    }

    button#save {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 5px 0 0;
      height: 42px;
      width: 180px;
      background: #f94d6a;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#F94D6A')};
      }

      &:disabled {
        opacity: 0.7;
        cursor: wait;
      }
    }

    .react-datepicker-wrapper > div {
      display: inline;
      > input {
        width: 100%;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
`;

export const Loading = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  align-self: center;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;
