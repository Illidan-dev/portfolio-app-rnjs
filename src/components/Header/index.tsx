import { Text, View, Image } from 'react-native';
import {
  SimpleLineIcons
} from '@expo/vector-icons';

import { Colors, Layout } from '../../Configs';


export default function Header(){
    return (
        <View style={{
            backgroundColor: Colors.theme,
            paddingBottom: Layout.height * 0.2,
            borderBottomLeftRadius: Layout.width * 0.1,
            borderBottomRightRadius: Layout.width * 0.1,
          }}>

            <View style={{alignItems: 'flex-end', paddingHorizontal: 32, marginVertical: 20}}>
              <SimpleLineIcons 
                name='user'
                size={20}
                style={{color:  Colors.white}} 
                
              />
            </View>

            <View style={{
              flexDirection: 'row',
              paddingHorizontal: 32,
              marginVertical: 36,
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 16
            }}>
                <Image 
                  style={{width: 50, height: 50, borderRadius: 50}}
                  source={require('../../../assets/icon.png')}
                />

                <View>
                    <Text style={{fontSize: 20, color: Colors.white, fontWeight: 'bold'}}>Lucas Ferreira</Text>
                    <Text style={{color: Colors.greyish}}>React Native Dev</Text>
                </View>
            </View>

          </View>
    )
}