import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: #343434;
`;


export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-left: ${({ ml }) => ml}px;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:  50%;
`;

export const Button = styled.button.attrs({
  type: 'submit'
})`
  width: 255px;
  height: 30px;
  background-color: #33be75;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// add

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px 0px 20px 0px;
`;

export const Label = styled.p`
 color: #333;
 margin: 0;
`;