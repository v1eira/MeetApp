import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    border: 0;
    border-radius: 4px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    :disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    div {
      margin-left: 8px;
    }
  }

  button#edit {
    background: ${props => (props.color ? props.color : '#4DBAF9')};

    &:hover {
      background: ${darken(0.08, '#4DBAF9')};
    }
  }

  button#delete {
    background: ${props => (props.color ? props.color : '#F94D6A')};

    &:hover {
      background: ${darken(0.08, '#F94D6A')};
    }
  }
`;

export const Cover = styled.div`
  margin-top: 30px;
  img {
    width: 100%;
    max-height: 300px;
  }
`;
export const Description = styled.div`
  text-align: justify;
  color: #fff;
  font-size: 18px;
  font-family: Helvetica Neue, Helvetica, Arial;
  p {
    margin-top: 20px;
  }
`;

export const DescriptionDetails = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ccc;
  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  span {
    margin-left: 8px;
  }
`;
