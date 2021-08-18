import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import images from "../theme/images";
import InnerNavigator from "./InnerNavigator";
import ChatNavigator from "./ChatNavigator";
import TranzactionScreen from "../screens/TranzactionScreen";
import ProfileNavigator from "./ProfileNavigator";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  console.log(props.route)
    return (
      <Tab.Navigator
        screenOptions={{headerShown:false,tabBarShowLabel:false}}
        initialRouteName={props.route.params.screeName}
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
          name="ProfileScreen"
          component={ProfileNavigator}
          initialParams={{screeName:props.route.params.secoundScreen===undefined?'Profile':props.route.params.secoundScreen}}
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