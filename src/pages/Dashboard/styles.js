import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: #fff;
      font-weight: bold;
    }
    svg {
      margin-right: 10px;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      width: 172px;
      height: 42px;
      font-weight: bold;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.2, '#f94d6a')};
      }
    }
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;
export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.past ? 0.6 : 1)};
  strong {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }
  > div {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
