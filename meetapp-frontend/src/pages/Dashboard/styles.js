import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    margin-bottom: 50px;

    strong {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      color: #fff;
      height: 42px;
      width: 172px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat() (1, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 576px;
  padding: 5px 15px;
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  opacity: ${props => (props.past ? 0.5 : 1)};

  strong {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: block;
    color: #fff;
    opacity: 0.6;
    font-size: 16px;
  }

  & + li {
    margin-top: 10px;
  }

  &:hover {
    border: 1px solid #f94d6a;
  }
`;
