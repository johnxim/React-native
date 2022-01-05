import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Đăng nhập" component={LoginScreen} />
                <Stack.Screen name="Trang chủ" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;