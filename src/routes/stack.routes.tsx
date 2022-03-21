import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Schedule } from "../screens/Schedule";
import { CarDetails } from "../screens/CarDetails";
import { ScheduleComplete } from "../screens/ScheduleComplete";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="ScheduleComplete" component={ScheduleComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
