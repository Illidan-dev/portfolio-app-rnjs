import { Text, View,  } from 'react-native';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';

import {ScrollView as ScrollViewGesture} from 'react-native-gesture-handler';

import { Colors, skillIcons } from '../../Configs';

export default function Stats(){

    return (
        <View style={{
            backgroundColor: Colors.white,
            marginHorizontal: 32,
            padding: 20,
            borderRadius: 20,
            elevation: 8,
            marginBottom: 16
          }}>
            
              <View 
                style={{
                  flexDirection:  "row", 
                  justifyContent: "space-between",
                  marginVertical: 8
                }}
              >
                <Text>Spec.</Text>
                <MaterialCommunityIcons name="trending-up" size={20} />
              </View>
                
                <ScrollViewGesture>
                  {
                    skillIcons.map( ({name, icon, stars}: any, index) => (
                      <View key={name} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: 2
                      }}>
                            <Text style={{fontSize: 25, color: Colors.theme}}>{name}</Text>
                            <View style={{flexDirection: 'row'}}>
                              {
                                [...Array(stars)].map( () => <MaterialCommunityIcons name='star' size={20} color={'#fdd440'} /> )
                              }
                            </View>
                      </View>
                    ))
                  }
                </ScrollViewGesture>


          </View>
    )
}