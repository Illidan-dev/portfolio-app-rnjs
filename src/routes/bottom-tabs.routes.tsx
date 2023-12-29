import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Colors } from "../Configs";
import HomeScreen from "../Screens/Home";
import SkillsScreen from "../Screens/Skills";






const {Navigator, Screen} = createBottomTabNavigator();


export default function BottomTabsNavigation(){
    return (
        <Navigator>
            <Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="home" size={30} style={{color: Colors.theme}} />,
                headerTintColor: Colors.white,
                headerTransparent: true,
                headerShown: false
            }} />

            <Screen name="Skills" component={SkillsScreen} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="trending-up" size={30} style={{color: Colors.theme}} />,
                headerTintColor: Colors.white,
                headerTransparent: true,
                headerShown: false
            }} />
        </Navigator>
    )
}