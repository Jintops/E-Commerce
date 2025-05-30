import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from "react-redux"
import {Toaster} from "./components/ui/sonner.js"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
    <Toaster /> 
      <App />
     
    </Provider>
  </BrowserRouter>
)
