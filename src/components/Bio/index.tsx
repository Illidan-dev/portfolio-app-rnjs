import { Text, View } from 'react-native';
import {
  AntDesign,
} from '@expo/vector-icons';



import { Colors, Layout } from '../../Configs/';



export default function Bio(){
    return (
        <View style={{
            backgroundColor: Colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16,
            marginTop: -Layout.height * 0.15
          }}>
              <View 
                style={{
                  flexDirection:  "row", 
                  justifyContent: "space-between",
                  marginVertical: 8
                }}
              >
                <Text>Bio</Text>
                <AntDesign name="user" size={20} />
              </View>

              <View style={{marginVertical: 8}}>
                <Text style={{color: Colors.greyish}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus aspernatur reiciendis officia, repellendus eveniet rerum illo totam voluptates qui facilis assumenda maiores ea. Voluptatum itaque sequi recusandae velit veritatis!</Text>
              </View>
          </View>
    )
}