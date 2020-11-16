import React, { useState} from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import api from '../../api'
import axios from 'axios'
import { 
  Container, 
  MainContainer, 
  Input, 
  Label, 
  Button, 
  Title,
  Row
} from './styles'

const Auth = () => {
  const history = useHistory()
  const [signin, setSingin] = useState(true)
  const { register, handleSubmit } = useForm();

  const onSubit = async (data) => {
    try {
      const response = await api.post(signin ? '/session' : '/users', data)
      if (signin) {
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        history.push('/home')
      } else {
        setSingin(true)
      }
      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
  }

  return ( 
    <Container>
      <MainContainer>        
        <Row>
          <Title 
            onClick={() => setSingin(true)} 
            color={signin ? "#fff": "#ffffff7f"}
          >
            SignIn
          </Title>
          <Title 
            onClick={() => setSingin(false)} 
            color={!signin ? "#fff": "#ffffff7f"} 
            ml={20}
          >
            SignUp
          </Title>
        </Row>
        <form onSubmit={handleSubmit(onSubit)}>
          {signin ? (
            <>        
              <Label>E-mail</Label>
              <Input name='email'ref={register} />
              <Label>Senha</Label>
              <Input name='pawod' ref={register} />
              <Button>
                SING IN
              </Button>
            </>  
          ) : (
            <>
              <Label>Nome</Label>
              <Input name='name' ref={register} />
              <Label>E-mail</Label>
              <Input name='email'ref={register} />
              <Label>Senha</Label>
              <Input name='password' ref={register} />
              <Button>
                SING UP
              </Button>
            </>  
          )}
            </form>  
      </MainContainer>
    </Container>
  );
}

export default Auth;

/* 
console.log({ data })
    console.log({ json: JSON.stringify(data) })
    try {
      const response = await axios.post(
        signin
        ?'http://localhost:3030/session'
        :'http://localhost:3030/users'        
        , data)
      history.push('/home')
      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
*/