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
  value?: string;
}

export default function PasswordInput({
  value,
  iconName,
  ...rest
}: InputProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer>
        <Feather
          name={iconName}
          color={
            isFocused || isFilled
              ? theme.colors.main
              : theme.colors.text_details
          }
          size={24}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        secureTextEntry={isPasswordVisible}
      />
      <ChangePasswordVisibilityButton
        isFocused={isFocused}
        onPress={handlePasswordVisibilityChange}
      >
        <Feather
          name={isPasswordVisible ? "eye" : "eye-off"}
          color={theme.colors.text_details}
          size={24}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
}
