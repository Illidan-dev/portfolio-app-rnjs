import {ScrollView as ScrollViewGesture, GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from "../components/Header";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Network from "../components/Network";
import { View } from 'react-native';
import { Layout } from '../Configs';

export default function SkillsScreen(){
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ScrollViewGesture>
                <Header />
                <View style={{marginTop: -Layout.height * 0.15}}>
                    <Skills />
                </View>
                <Stats />
            </ScrollViewGesture>
        </GestureHandlerRootView>
    )
}