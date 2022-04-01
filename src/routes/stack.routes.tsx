import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Schedule } from "../screens/Schedule";
import { CarDetails } from "../screens/CarDetails";
import { ScheduleComplete } from "../screens/ScheduleComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import MyCars from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import SignIn from "../SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="SignIn" component={SignIn} />
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="ScheduleComplete" component={ScheduleComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
