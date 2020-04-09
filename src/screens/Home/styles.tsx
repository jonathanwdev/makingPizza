import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const NavigateButton = styled(Button)`
  width: 100%;
  margin-top: 50px;
`;

export const Image = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;
