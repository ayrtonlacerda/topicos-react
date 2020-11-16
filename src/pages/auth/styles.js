import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #343434;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 400px;
  width: 250px;
`
export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px 0px 20px 0px;
`;

export const Label = styled.p`
 color: #fff;
 margin: 0;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ color }) => color};
  margin-left: ${({ ml }) => ml}px;
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