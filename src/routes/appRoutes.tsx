/* eslint-disable import/no-unresolved */
import AppLayout from '@components/layouts/AppLayout'
import About from '@container/app/About'
import Counter from '@container/app/Counter/Counter'
import Home from '@container/app/Home'
import NotFound from '@container/common/NotFound'
import ServerError from '@container/common/ServerError'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// import PrivateRoute from './privateRoutes'
const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        {/* <Route path='/sign-in' element={<Navigate to='/about' replace />} /> */}
        {/* <Route
          path='/exams'
          element={<PrivateRoute path='/exams' Component={ExamList} requiredRoles={[role.STUDENT]} />}
        />
        <Route
          path='/exam/:id'
          element={<PrivateRoute path='/exam/:id' Component={ExamDetail} requiredRoles={[role.STUDENT]} />}
        /> */}
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
