import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import Search from './Search';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;





