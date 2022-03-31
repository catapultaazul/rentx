import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars,
} from "./styles";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

import Logo from "../../assets/logo.svg";

import api from "../../services/api";

import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import Loading from "../../components/LoadingAnimation";
import { useTheme } from "styled-components";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);
  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const theme = useTheme();

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

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
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <Animated.View
        style={[
          myCarsButtonStyle,
          {
            position: "absolute",
            bottom: 13,
            right: 22,
          },
        ]}
      >
        <ButtonAnimated
          onPress={handleOpenMyCars}
          style={[styles.button, { backgroundColor: theme.colors.main }]}
        >
          <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
        </ButtonAnimated>
      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
