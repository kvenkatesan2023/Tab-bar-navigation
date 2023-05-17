import react from "react";
import { Text, View ,Image} from 'react-native';
import Book from "./book";



export default function feed({ navigation }){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:20,}}></Text>
           <Book/>
      
        </View>
        
      );
    
}
