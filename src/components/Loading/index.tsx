import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useTheme } from "styled-components";

export default function Loading() {
  const theme = useTheme();
  return (
    <ActivityIndicator
      color={theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
}
