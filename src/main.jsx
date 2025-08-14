import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import clevertap from 'clevertap-web-sdk';

// clevertap.init('884-5ZW-8Z7Z', 'sk1-staging-4', 'wzrkt.com')
// clevertap.privacy.push({useIP: true})
// clevertap.privacy.push({ optOut: false });
// clevertap.setLogLevel(3)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
