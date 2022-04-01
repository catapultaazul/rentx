import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function PasswordInput({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} color={theme.colors.text_details} size={24} />
      </IconContainer>
      <InputText {...rest} secureTextEntry={isPasswordVisible} />
      <ChangePasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <Feather
          name={isPasswordVisible ? "eye" : "eye-off"}
          color={theme.colors.text_details}
          size={24}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
}
