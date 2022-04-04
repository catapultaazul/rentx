import React, { useState } from "react";
import * as Yup from "yup";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import { Container, Footer, Form, Header, SubTiitle, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate({ email, password });
      Alert.alert("Tudo certo");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      } else {
        Alert.alert("Erro ao fazer login");
      }
    }
  }

  function handleCreateAccount() {
    navigation.navigate("FirstStep");
  }

  return (
    <ScrollView>
      {/* <KeyboardAvoidingView behavior="position" enabled> */}
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
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              disabled={false}
              loading={false}
            />
            <Button
              title="Criar contra gratuita"
              onPress={handleCreateAccount}
              disabled={false}
              loading={false}
              color={theme.colors.background_secondary}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
      {/* // </KeyboardAvoidingView> */}
    </ScrollView>
  );
}
