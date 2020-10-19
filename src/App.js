import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Container,  ButtonContainer } from './styles';
import { CustomTitle, Button } from './components'

const App = () => {
  const [count, setCount] = useState(0)

  // executa assim que o componente é montado ou
  // quando o parametron no array e alterado
  useEffect(() => {
    //console.log('executei !!!')
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


      <CustomTitle title={count} test1='prop 1' />


      <ButtonContainer>
        {count > 0 && (
          <Button color='#f92242' textButton='SUB' onClick={handleSub} />
           
        )}        
        <Button color='#099222' textButton='ADD' onClick={handleAdd} />
         
      </ButtonContainer>     
    </Container>
  );
}

export default App;
