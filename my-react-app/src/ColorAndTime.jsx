import { useState } from 'react'
import PropChanging from './PropChanging.jsx'

export default function ColorAndTime() {
  const [color, setColor] = useState('blue')

  return (
    <>
      <select value={color} onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <PropChanging color={color} />
    </>
  )
}
