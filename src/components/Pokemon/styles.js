import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  background-color: #efefef;
  align-items: center;
  padding: 20px;
  margin: 5px;
  border-radius: 10px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0px;
  flex-direction: column;
  margin-left: 15px;
`

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: ${({ bold }) => bold ? 'bold' : 'regular'};
  margin-left: ${({ ml }) => ml || 0};
  line-height: 0;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img`
  height:150px;
  width: 150px;
`