import React, { useEffect, useState } from 'react';
import { Container, Name, Image, DataContainer, Text, TextContainer } from './styles';
import axios from 'axios'

const Pokemon = ({ name, url }) => {
  const [data, setData] = useState(null);

  const request = async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
      console.log({ pokemon: response.data })
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    request()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
     <Container>
       {data && (
         <Image 
          src={data.sprites.other?.dream_world?.front_default || ''}          
         />         
       )}
       <DataContainer>
        <Name>{name}</Name>
        {data && (
          <>
            <TextContainer>
              <Text>Experiência: </Text>
              <Text bold ml='5px'> {data.base_experience}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Altura: </Text>
              <Text bold ml='5px'> {data.height}</Text>
            </TextContainer>
            <TextContainer>
              <Text>Nº de habilidades: </Text>
              <Text bold ml='5px'> {data.abilities.length}</Text>
            </TextContainer>
          </>
        )}
        
       </DataContainer>
     </Container>
  );
}

export default Pokemon;