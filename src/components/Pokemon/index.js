import React from 'react';
import { Container, Name, DataContainer, Text, TextContainer } from './styles';

const Card = ({ title, link, description, tags }) => (
  <Container>    
    <DataContainer>
      <Name>{title}</Name>
          <TextContainer>
            <Text>descrição: </Text>
            <Text bold ml='5px'>{description}</Text>
          </TextContainer>
          <TextContainer>
            <Text>link: </Text>
            <a href={link}>{link}</a>
          </TextContainer>      
          <TextContainer>
            <Text>ferramentas: </Text>
            {tags.map((tag, index) =>  
              <Text bold ml='5px'>
                {index === tags.length - 1 ? `${tag}` : `${tag} - `}
              </Text> 
            )}
          </TextContainer>
    </DataContainer>
  </Container>
)

export default Card;