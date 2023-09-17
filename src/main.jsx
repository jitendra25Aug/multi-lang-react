import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocaleProvider from "./context/locale_context";


ReactDOM.createRoot(document.getElementById('root')).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
)
