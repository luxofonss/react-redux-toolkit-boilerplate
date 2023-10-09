/* eslint-disable import/no-unresolved */
import AppLayout from '@components/layouts/AppLayout'
import About from '@container/app/About'
import Counter from '@container/app/Counter/Counter'
import Home from '@container/app/Home'
import NotFound from '@container/common/NotFound'
import ServerError from '@container/common/ServerError'
import { Navigate } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/counter',
        element: <Counter />
      },
      {
        path: '/404',
        element: <NotFound />
      },
      {
        path: '/500',
        element: <ServerError />
      },
      {
        path: '*',
        element: <Navigate to='/404' replace />
      }
    ]
  }
]

export default appRoutes
