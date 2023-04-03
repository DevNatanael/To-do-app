import React from 'react';
import AppContainer from './src/components/app-container';
import Navigator from './src/';
export default function App(): JSX.Element {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}
