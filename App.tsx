import React from 'react';
import AppContainer from './src/components/app-container';
import MainScreen from './src/screens/main';
export default function App(): JSX.Element {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}
