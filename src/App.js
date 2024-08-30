import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Menu from './Pages/Menu/Menu';
import Footer from './Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useGetShoppingCartQuery } from './Apis/shoppingCartApi';
import { setLoggedInUser } from './Storage/Redux/userAuthSlice';
import { setShoppingCart } from './Storage/Redux/shoppingCartSlice';
import { BaseAdminLayout, BaseHomeLayout } from './Components/BaseRouter/home';
import { routers } from './routers/routers';
import Admin from './Pages/Admin/Admin';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const userData = useSelector((state) => state.userAuthStore);
  const { data, isLoading } = useGetShoppingCartQuery(userData.id, { skip: skip })

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role } = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }))
    }
  }, [])

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setShoppingCart(data.result?.cartItems))
    }
  }, [data])


  useEffect(() => {
    if (userData.id) setSkip(false);
  }, [userData])


  const renderBaseHomeLayout = () => {
    return routers.map((props, index) => {
      return BaseHomeLayout(props, index)
    })
  }



  return (
    <div className="App">
      <>
        <Routes >
          {renderBaseHomeLayout()}
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>

    </div>
  );
}

export default App;
