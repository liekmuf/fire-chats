import './App.css';
import firebase from "firebase/compat/app";
import {useState, useEffect } from 'react';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chats from './components/Chats/Chats';
import Auth from './components/Auth/Auth';
import { DeviceContext } from './context/DeviceContext';


const App = () => {
  const auth = firebase.auth()
  const [user] = useAuthState(auth)

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 766;

  const onWindowSizeChange = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);

    return () => {
      window.removeEventListener('resize', onWindowSizeChange);
    }
  }, []);


  return (
    <div className="App">
      <DeviceContext.Provider value={isMobile}>
        {user ?
          <Chats /> :
          <Auth/>}
      </DeviceContext.Provider>
    </div >
  );
}


export default App;
