import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShareContext from './contextAPI/ShareContext.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='193319711554-6ep1vv2ag5hhg7e3sppp823dm4m03ujf.apps.googleusercontent.com'>
       <ShareContext>
        <AuthContext>
          <App />
        </AuthContext>
       </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
