import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as Yup from "yup";
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
import { useNavigation } from "@react-navigation/native";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useAuth } from "../../../hooks/auth";

export default function FirstStep() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driversLicense, setDriversLicense] = useState("");

  const { user } = useAuth();

  function handleBack() {
    navigation.goBack();
  }

  async function handleContinue() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .email("E-mail inválido")
          .required("E-mail é obrigatório"),
        driversLicense: Yup.string().required("CNH é obrigatória"),
      });

      const data = { name, email, driversLicense };
      await schema.validate(data);

      navigation.navigate("SecondStep", { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa,", error.message);
      }
    }
  }

  return (
    <TouchableWithoutFeedback>
      <Container>
        <Header>
          <BackButton onPress={handleBack} />
          <Steps>
            <Bullet active />
            <Bullet />
          </Steps>
        </Header>

        <Title>Crie sua {"\n"}conta</Title>
        <SubTitle>Faça seu cadastro de {"\n"}forma rápida e fácil</SubTitle>

        <Form>
          <FormTitle>1. Dados</FormTitle>
          <Input
            iconName="user"
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={(text) => {
              setEmail(text);
            }}
            value={email}
          />
          <Input
            iconName="credit-card"
            placeholder="CNH"
            keyboardType="numeric"
            onChangeText={(text) => setDriversLicense(text)}
            value={String(driversLicense)}
          />
        </Form>
        <Button title="Próximo" onPress={handleContinue} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
