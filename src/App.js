import React, { useState } from 'react';
import { Title, Container, Button, ButtonContainer } from './styles';


const App = () => {
  const [count, setCount] = useState(0)

  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  } 

  const handleAdd = () => setCount(count + 1)

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
