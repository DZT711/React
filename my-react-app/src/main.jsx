import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'
import ShoppingList from './ShoppingList.jsx'
import Counter from './Counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile />
    <ShoppingList />
    <Counter />
  </StrictMode>,
)
