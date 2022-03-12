import React from "react";
import { StatusBar, Text } from "react-native";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carDataOne} />}
      />
    </Container>
  );
}
