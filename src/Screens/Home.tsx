import {ScrollView as ScrollViewGesture, GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from "../components/Header";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Network from "../components/Network";

export default function HomeScreen(){
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ScrollViewGesture>
                <Header />
                <Bio />
                <Network />
            </ScrollViewGesture>
        </GestureHandlerRootView>
    )
}