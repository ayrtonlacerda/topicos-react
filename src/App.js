import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Container, Card } from './styles';
import { CustomTitle, Pokemon } from './components'
import axios from 'axios'

const App = () => {
  const [pokemons, setPokemons] = useState(null)
  
  const request = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon#')
      setPokemons(response.data?.results)
      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    request()
  },[])

  return (
    <Container>
      {pokemons 
        ? pokemons.map(pokemon => (
          <Pokemon {...pokemon}/>
        ))
        : <CustomTitle>Ainda não tem pokemons</CustomTitle> }
    </Container>
  );
}

export default App;
