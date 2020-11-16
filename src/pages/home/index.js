import React, { useEffect, useState } from 'react';
import { Container, Title, Button, Input, Label, ContainerModal } from './styles'
import { Card } from '../../components'
import Modal from 'react-modal';
import { useForm } from 'react-hook-form'
import api from '../../api'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Home = () => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const { register, handleSubmit } = useForm();

  const openModal = () => setIsOpen(true);  
  const closeModal = () => setIsOpen(false);

  const requestData = async () => {
    try {
      const response = await api.get('/tools')
      setData(response.data)
    } catch (error) {
      console.log({ error })
    }
  }

  const onSubit = async (data) => {
    try {
      await api.post('/tools', data) 
      closeModal()
      requestData() 
    } catch (error) {
      console.log({ error })
    }
  }

  
  useEffect(() => {
    requestData()
  }, [])

  return(
     <Container>
       <Title>Ferramentas</Title>
       <Button onClick={openModal}>ADD + </Button>
       {data.map((tool) => <Card {...tool} />)}
       <Modal
          isOpen={modalIsOpen}
         // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Add Tools</h2>
          <ContainerModal>
            <form onSubmit={handleSubmit(onSubit)}>
                <Label>titulo</Label>
                <Input name='title' ref={register} />
                <Label>link</Label>
                <Input name='link'ref={register} />
                <Label>descrição</Label>
                <Input name='description' ref={register} />
                <Button>
                  add
                </Button>
            </form>
          </ContainerModal>         
        </Modal>
     </Container>
    );
}

export default Home;