import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { globaltheme } from './config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider  theme={globaltheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
