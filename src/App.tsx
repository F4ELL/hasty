import React, { useState } from 'react';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import GlobalStyles from './styles/global'
import Modal from 'react-modal'
import { NewRequestModal } from './components/NewRequestModal';
import { SignUp } from './pages/SignUp';
import { Requests } from './pages/Requests';

Modal.setAppElement('#root');

const App = () => {

  const [ isNewRequestModalOpen, setIsNewRequestModalOpen ] = useState(false)

  const handleOpenNewRequestModal = () => {
      setIsNewRequestModalOpen(true)
  }

  const handleCloseNewRequestModal = () => {
      setIsNewRequestModalOpen(false)
  }

  return (
    <>
      <GlobalStyles />
      {/*<Login />
      <Header />
      <SideBar />*/}
      {/*<Profile />

      <Header onOpenNewRequestModal={handleOpenNewRequestModal} />

      <SignUp />*/}

      <Requests />

      <NewRequestModal 
        isOpen={isNewRequestModalOpen}
        onRequestClose={handleCloseNewRequestModal}
      />
    </>
  )
}

export default App;
