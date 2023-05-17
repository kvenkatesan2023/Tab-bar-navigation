import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";


import feed from "./feed";
import move from "./move";



const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarshowLabel:false,
        tabBarStyle:{backgroundColor:`#afeeee`}
        
        }}>
        <Tab.Screen name="Home" component={feed}  options={{
          tabBarIcon:({color,size}) => (
            <Ionicons name ="home-outline" color={color} size={size}/>
          )
        }}/>
         
        <Tab.Screen name="Weather" component={move} options={{
          tabBarIcon:({color,size})=>(
            <Feather name="shopping-bag" color={color} size={size}/>
          )

          
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}