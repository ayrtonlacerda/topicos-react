import React, { useState, useCallback, useEffect } from 'react';
import { Title, Container, Button, ButtonContainer } from './styles';


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('executei !!!')
  }, [count])

  // useCallback so executa quando o parametros do array são alterados
  // tirando a primeira vez
  const handleSub = useCallback(() => {
    if (count > 0) {
      setCount(count - 1)
    }
  }, [count])

  const handleAdd = useCallback(() => setCount(count + 1), [count]) 

  return (
    <Container>
      <Title>{count}</Title>
      <ButtonContainer>
        {count > 0 && (
          <Button color='#f92242' onClick={handleSub}>SUB</Button>
        )}        
        <Button color='#099222' onClick={handleAdd}>ADD</Button>
      </ButtonContainer>     
    </Container>
  );
}

export default App;
