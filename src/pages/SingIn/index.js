
import React, { useRef, useState } from 'react';
import {Alert} from 'react-native';
import { Container,FormInput, FormButton } from './styles';

import api from '../../services/api';

export default function SingIn  ({navigation})  {
  const passwordRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function authUser() {
    const token= api.post('/user/12345',{
      "login": "lls.engenheiro@gmail.com",
      "senha": "123456"
    });
    Alert.alert(token);
  }

  return (
   <Container>
    <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu melhor e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
    />

    <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"

            value={password}
            onChangeText={setPassword}
    />
    <FormButton onPress={authUser}> LOGIN</FormButton>
  </Container>
  );
}


