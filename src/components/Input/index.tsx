import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Container, IconContainer, InputText } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function Input({ iconName, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} color={theme.colors.text_details} size={24} />
      </IconContainer>
      <InputText {...rest} />
    </Container>
  );
}
