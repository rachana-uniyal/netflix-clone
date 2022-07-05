import './App.css';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import ProfileScreen from './Components/Profile/ProfileScreen';
import { Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import { login } from './features/userSlice'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout())
      }
  })
  return unsubscribe
  },[dispatch])

  return (
    <div className="app">
        { !user ? (
          <LoginScreen/>
        ) :
        (
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
          </Routes>
        )}
    </div>  
  );
}

export default App;
