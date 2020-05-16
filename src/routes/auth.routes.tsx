import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      // Ativa ou desativa o header
      headerShown: false,

      // Cor da fonte do header
      // headerTintColor: '#312e38',
      // Cor do fundo do header
      // headerStyle: {
      //   backgroundColor: '#7159c1',
      // },
      // Cor do fundo da tela
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
