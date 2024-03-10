import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/components/App'

import './global.module.css'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
