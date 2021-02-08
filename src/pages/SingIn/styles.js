import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #004d95;
`;

export const FormInput = styled(Input)`
margin-bottom: 10px;
`;

export const FormButton = styled(Button)`
  margin-top: 5px;
  width: 267px;
  align-self: center;
`;

