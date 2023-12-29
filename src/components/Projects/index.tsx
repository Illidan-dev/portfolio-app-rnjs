import { StyleSheet, Text, View } from 'react-native';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';

import {ScrollView as ScrollViewGesture, TouchableOpacity} from 'react-native-gesture-handler';


import { Colors, Layout, projects } from '../../Configs/';

export default function Projects(){
    return (
        <ScrollViewGesture horizontal>
              {
                projects.map ( ({name, icon}: any, index) => (
                  <View 
                    key={index}
                    style={{
                      backgroundColor: Colors.theme,
                      marginHorizontal: 8,
                      padding: 20,
                      borderRadius: 16,
                      marginBottom: 16,
                      alignItems: 'center',
                      width: Layout.width * 0.7

                    }}
                  >
                    <Text style={{
                      fontSize: 20,
                      color: Colors.white,
                      fontWeight: 'bold'
                    }}>{name}</Text>
                    <MaterialCommunityIcons name={icon} size={150} style={{
                      color: Colors.white,
                      marginVertical: 40
                    }} />

                    <TouchableOpacity>
                      <View style={{
                        backgroundColor: Colors.white,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        paddingVertical: 10
                      }}>
                        <Text style={{color: Colors.theme, fontWeight: 'bold'}}>View Project</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ) )
              }
          </ScrollViewGesture>
    );
}