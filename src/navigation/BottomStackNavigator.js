import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image ,Text } from "react-native";
import images from "../theme/images";

import DashBoardScreen from "../screens/DashboardScreen";
import InnerNavigator from "./InnerNavigator";
import SignUpScreen from "../screens/SignUpScreen";
import ChatNotifications from "../screens/ChatNotifications";
import ChatBox from "../screens/ChatBoxScreen";
import ChatNavigator from "./ChatNavigator";
import TranzactionScreen from "../screens/TranzactionScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown:false,tabBarShowLabel:false}}
      >
        <Tab.Screen
          name="DashBoard"
          component={InnerNavigator}
          options={{
            tabBarIcon: ({focused}) => focused? <Image source={images.dashboard_activ}/>: <Image source={images.dashboard}/>,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Chat"
          component={ChatNavigator}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({focused}) =>  focused? <Image source={images.chat_activ}/>: <Image source={images.chat}/>,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Tranzactions"
          component={TranzactionScreen}
          options={{
            tabBarLabel: "Tranzactions",
            tabBarIcon: ({focused}) => (
              focused? <Image source={images.tranzactions_activ}/>: <Image source={images.tranzactions}/>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({focused}) => (
              focused? <Image source={images.settings_activ}/>: <Image source={images.settings}/>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  };

  export default BottomTabNavigator;