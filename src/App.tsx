import { FC } from 'react'
import './shared/styles/app.scss'
import AppRoutes from './routes/appRoutes'
import AuthRoutes from './routes/authRoutes'
import { ROLE } from '@shared/constants'

const App: FC = () => {
  const role = null
  return <div>{role == ROLE.USER ? <AppRoutes /> : <AuthRoutes />}</div>
}

export default App
