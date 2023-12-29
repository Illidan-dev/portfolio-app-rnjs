import { Text, TouchableOpacity, View, Linking  } from 'react-native';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';


import { Colors, network } from '../../Configs';

export default function Network(){

  const openSite = (url: string) => url ? Linking.openURL(url) : false;

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
                <Text>Network</Text>
                <MaterialCommunityIcons name="pen" size={20} />
              </View>

              <View style={{marginVertical: 8, justifyContent: 'center', alignItems:'center'}}>
                  { 
                    network.map ( ( {url, icon, name} : any, index) => (
                        <TouchableOpacity 
                            onPress={ () => openSite(url) }
                            key={index}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems:'center',
                                borderColor: '#000',
                                borderWidth: 1,
                                borderRadius: 4,
                                marginBottom: 6,
                                width: '80%',
                                gap: 10
                            }}
                        >
                            <MaterialCommunityIcons 
                                name={icon}
                                size={30}
                                style={{color: Colors.theme}}
                            />

                            <Text style={{
                              fontSize: 20,
                              color: Colors.theme
                            }}>{name}</Text>
                        </TouchableOpacity>
                    ) )
                  }
              </View>
          </View>
    )
}