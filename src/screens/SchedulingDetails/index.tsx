import React from "react";
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Feather } from "@expo/vector-icons";
import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  CarImages,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateContainer,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { Acessory } from "../../components/Acessory";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

export function SchedulingDetails() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("ScheduleComplete");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => console.log("oi")} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff5a98a2-fd1e-4585-84a9-d91a5947d7d0/61f4cdfb-46ba-4ae9-8c08-3414e91094af.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380 KM/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateContainer>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateContainer>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateContainer>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateContainer>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          onPress={handleConfirmRental}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
}
