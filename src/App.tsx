import { FC } from 'react'
import appRoutes from './routes/appRoutes'
import authRoutes from './routes/authRoutes'
import { ROLE } from '@shared/constants'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App: FC = () => {
  const role = null
  let accessRoutes = null
  if (role === ROLE.USER) {
    accessRoutes = appRoutes
  } else {
    accessRoutes = authRoutes
  }

  const router = createBrowserRouter(accessRoutes)

  return <RouterProvider router={router} />
}

export default App
