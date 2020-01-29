/* eslint-disable no-console */
import React, { Component } from 'react';
import AppContainer from './app/core/navigation/Navigation';
import AuthProvider from './app/core/auth/AuthProvider';

console.disableYellowBox = true;
class App extends Component {
  render() {
    return (
      <>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </>
    );
  }
}
export default App;
