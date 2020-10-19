import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #5577f7;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 128px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Button = styled.button`
  height: 55px;
  width: 150px;
  margin-left: 20px;
  background-color: ${props => props.color};
  color: #fff;
  font-weight: 800;
`;