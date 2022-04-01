import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { Container, Footer, Form, Header, SubTiitle, Title } from "./styles";

export default function SignIn() {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"transparent"}
            translucent
          />
          <Header>
            <Title>Estamos {"\n"}quase lá</Title>
            <SubTiitle>
              Faça seu login para começar{"\n"}uma experiência incrível.
            </SubTiitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize={"none"}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
            />
          </Form>
          <Footer>
            <Button title="Login" onPress={() => {}} disabled loading={false} />
            <Button
              title="Criar contra gratuita"
              onPress={() => {}}
              disabled={false}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
