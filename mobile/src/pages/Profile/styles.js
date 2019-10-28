import styled from 'styled-components/native';

import { Button, Input } from '~/components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 20,
  },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 30px 0 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const LogoutButton = styled(Button).attrs({
  outline: true,
})`
  margin-top: 15px;
`;
