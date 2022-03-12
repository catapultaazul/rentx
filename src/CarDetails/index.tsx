import React from "react";
import { Acessory } from "../components/Acessory";
import { BackButton } from "../components/BackButton";
import { ImageSlider } from "../components/ImageSlider";

import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";

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
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../components/Button";

export function CarDetails() {
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
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime error,
          illum excepturi hic qui tenetur itaque architecto. Fuga dicta impedit,
          unde ea at accusantium architecto facere repudiandae magni, quasi
          obcaecati!
        </About>
      </Content>
      <Footer>
        <Button title="teste" />
      </Footer>
    </Container>
  );
}
