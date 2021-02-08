
import React, { useRef, useState } from 'react';

import { Container,FormInput, FormButton } from './styles';

export default function SingIn  ({navigation})  {
  const passwordRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    <FormButton onPress={()=> navigation.navigate('Home',{name:email})}> LOGIN</FormButton>
  </Container>
  );
}


