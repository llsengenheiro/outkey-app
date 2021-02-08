import React from 'react';


import { Container, TextTest,FormButton } from './styles';

export default function Home ({navigation}) {
  return (
  <Container>
    <TextTest>Hello</TextTest>
    <FormButton onPress={()=> navigation.goBack()}> VOLTAR</FormButton>
  </Container>
  );
}



