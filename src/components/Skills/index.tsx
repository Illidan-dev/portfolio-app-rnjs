import { Text, View,  } from 'react-native';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';

import {ScrollView as ScrollViewGesture} from 'react-native-gesture-handler';

import { Colors, skillIcons } from '../../Configs';

export default function Skills(){
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
                <Text>Skills</Text>
                <MaterialCommunityIcons name="pen" size={20} />
              </View>

              <ScrollViewGesture horizontal style={{marginVertical: 8}}>
                  {
                    skillIcons.map ( ({icon: skill}: any, index) => (
                      <View key={skill} style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        borderWidth: 2,
                        borderColor: Colors.theme,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 2
                      }}>
                        <MaterialCommunityIcons 
                          name={skill}
                          size={30}
                          style={{color: Colors.theme}}
                        />
                      </View>
                    ) )
                  }
              </ScrollViewGesture>
          </View>
    )
}