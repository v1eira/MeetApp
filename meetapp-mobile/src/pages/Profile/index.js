import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Background } from '~/components';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from './styles';

function Profile() {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const loading = useSelector(state => state.user.loading);
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Container>
        <Form>
          <FormInput
            placeholder="Nome completo"
            autoCapitalize="words"
            returnKeyType="next"
            textContentType="name"
            blurOnSubmit={false}
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            textContentType="emailAddress"
            autoCorrect={false}
            blurOnSubmit={false}
            ref={emailRef}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            placeholder="Senha atual"
            secureTextEntry
            returnKeyType="next"
            textContentType="password"
            blurOnSubmit={false}
            ref={oldPasswordRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            placeholder="Nova senha"
            secureTextEntry
            returnKeyType="next"
            textContentType="password"
            blurOnSubmit={false}
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            placeholder="Confirmação de senha"
            secureTextEntry
            returnKeyType="go"
            textContentType="password"
            blurOnSubmit={false}
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Salvar perfil
          </SubmitButton>

          <LogoutButton onPress={handleSignOut}>Sair do MeetApp</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

export default Profile;
