import React from 'react';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Login } from './pages/Login';
import GlobalStyles from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/*<Login />*/}
      <Header />
      <SideBar />
    </>
  )
}

export default App;
