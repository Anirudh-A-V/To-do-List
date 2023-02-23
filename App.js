import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './screens/Home';
import AddTask from './screens/AddTask';
import { ContextProvider } from './contexts/ContextProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTask" component={AddTask} />
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaProvider>
  );
}

