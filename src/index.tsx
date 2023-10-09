import { store } from '@store/index'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './shared/styles/app.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)
