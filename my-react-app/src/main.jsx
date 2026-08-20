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
import GoodJob from './GoodJob.jsx'
import CurlyBraces from './CurlyBraces.jsx'
import GetDate from './GetDate.jsx'
import CSSList from './CSSList.jsx'
import CSSPortfolio from './CSSPortfolio.jsx'
import PropInComponent from './PropInComponent.jsx'
import ColorAndTime from './ColorAndTime.jsx'

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
    {/* <h1>Good Job Component</h1> */}
    <GoodJob />
    <h1>Curly Braces Component</h1>
    <CurlyBraces />
    <h1>Get Date Component</h1>
    <GetDate />
    <CSSList />
    <h1>Css Styling In Json</h1>
    <CSSPortfolio />
    <PropInComponent />
    <h1 >Props Changing</h1>
    <ColorAndTime />
  </StrictMode>,
)
