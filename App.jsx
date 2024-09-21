import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import StudentDashboard from './screens/Student/StudentDashboard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EduTrack Login" screenOptions={{ headerMode: 'screen', headerTintColor: 'white', headerStyle: { backgroundColor: 'black' }, }}>
        <Stack.Screen name="EduTrack Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;