import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Profile from './Profile.jsx'
import ShoppingList from './ShoppingList.jsx'
import Counter from './Counter.jsx'
import Caro from './Caro.jsx'
import CaroWithBot from './CaroWithBot.jsx'
import Todos from './Todos.jsx'
import RenderList from './RenderList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile />
    <ShoppingList />
    <Counter />
    <h1>Tic Tac Toe</h1>
    <Caro />
    <CaroWithBot />
    <h1>Import & Export Components</h1>
    <Profile />
    <Profile />
    <Profile />
    <h1>Todos</h1>
    <Todos />
    <h1>Football Players List</h1>
    <RenderList />
  </StrictMode>,
)
