import React, { useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user/userSlice';

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const address = localStorage.getItem('address')
    const phoneNumber = localStorage.getItem('phoneNumber')
    const role = localStorage.getItem('role')

    if (token && email && name && address && phoneNumber && role) {
      dispatch(setUser({ token, email, name, address, phoneNumber, role }))
    }
  }, [dispatch])


  return (
    <div className="App">
       <MainPage/>
    </div>
  );
}

export default App;
