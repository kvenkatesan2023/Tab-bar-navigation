import react from "react";
import { Text, View } from 'react-native';
import Tag from "./tag";

export default function move({ navigation }){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:20}}>Weather checking</Text>
          <Tag/>
        </View>
      );
    
}