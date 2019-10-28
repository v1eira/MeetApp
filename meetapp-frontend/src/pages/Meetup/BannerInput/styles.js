import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    cursor: pointer;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 4px;

    background: rgba(0, 0, 0, 0.7);
    transition: background 0.35s;

    &:hover {
      background: rgba(0, 0, 0, 0.55);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      opacity: 0.3;
      font-size: 20px;
      font-weight: bold;

      svg {
        margin-bottom: 10px;
      }
    }

    img {
      max-height: 300px;
      width: 100%;
    }

    input {
      display: none;
    }
  }
`;
