import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";
import { BackButton } from "../../../components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import PasswordInput from "../../../components/PasswordInput";
import { useTheme } from "styled-components";
import { Confirmation } from "../../Confirmation";
import api from "../../../services/api";

interface Params {
  user: {
    name: string;
    email: string;
    driversLicense: string;
  };
}

export default function SecondStep() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação da senha");
    }

    if (password !== passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }

    await api
      .post("/users", {
        name: user.name,
        email: user.email,
        password: password,
        driver_license: user.driversLicense,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          nextScreenRoute: "SignIn",
          title: "Conta Criada!",
          message: `Agora é so fazer login \ne aproveitar`,
          user: { ...user, password },
        });
      })
      .catch(() => {
        Alert.alert("Opa", "não foi possível criar sua conta");
      });
  }

  return (
    <TouchableWithoutFeedback>
      <Container>
        <Header>
          <BackButton onPress={handleBack} />
          <Steps>
            <Bullet />
            <Bullet active />
          </Steps>
        </Header>

        <Title>Crie sua {"\n"}conta</Title>
        <SubTitle>Faça seu cadastro de {"\n"}forma rápida e fácil</SubTitle>

        <Form>
          <FormTitle>2. Senha</FormTitle>
          <PasswordInput
            iconName="lock"
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <PasswordInput
            iconName="lock"
            placeholder="Repetir Senha"
            onChangeText={(text) => setPasswordConfirm(text)}
            value={passwordConfirm}
          />
        </Form>
        <Button
          title="Cadastrar"
          onPress={handleRegister}
          color={theme.colors.success}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
