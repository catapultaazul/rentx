import React from "react";
import LottieView from "lottie-react-native";
import { Container } from "./styles";

import loadingAnimation from "../../assets/loading.json";

export default function Loading() {
  return (
    <Container>
      <LottieView
        source={loadingAnimation}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
