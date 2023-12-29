import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./bottom-tabs.routes";



export default function RouterContainer(){
    return (
        <NavigationContainer>
            <BottomTabsNavigation />
        </NavigationContainer>
    )
}