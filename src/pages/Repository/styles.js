import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #282a36;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #f8f8f2;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #f8f8f2;
  list-style: none;
  li {
    display: flex;
    padding: 15px 10px;
    background-color: #282a36;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #44475a;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #f8f8f2;
          &:hover {
            color: #6272a4;
          }
        }
        span {
          background: #44475a;
          color: #f8f8f2;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #6272a4;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    background: #282a36;
    &:nth-child(${props => props.active + 1}) {
      background: #6272a4;
      color: white;
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  button {
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    background: #282a36;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
