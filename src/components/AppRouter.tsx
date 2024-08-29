import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Table from '../pages/TablePage/TablePage'
import Cabinet from '../pages/CabinetPage/CabinetPage'
import Cupboard from '../pages/CupboardPage/CupboardPage'
import Main from '../pages/MainPage/MainPage'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/table' element={<Table/>}/>  
      <Route path='/cabinet' element={<Cabinet/>}/>  
      <Route path='/cupboard' element={<Cupboard/>}/>  
    </Routes>
  )
}

export default AppRouter