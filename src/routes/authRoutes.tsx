import AppLayout from '@components/layouts/AppLayout'
import SignIn from '@container/authentication/SignIn'
import NotFound from '@container/common/NotFound'
import ServerError from '@container/common/ServerError'
import { Navigate, Route, Routes } from 'react-router-dom'

const AuthRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/500' element={<ServerError />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Route>
    </Routes>
  )
}

export default AuthRoutes
