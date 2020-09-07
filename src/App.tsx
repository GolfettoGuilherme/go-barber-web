import React from 'react';
import GlobalStyle from './styles/global';

import SingIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks';


const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
      </AppProvider>



      <GlobalStyle />
    </>
  )
};

export default App;
