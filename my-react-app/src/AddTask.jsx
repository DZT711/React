import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        if (text.trim() !== '') {
          onAddTask(text);
          setText('');
        }
      }}>Add</button>
    </>
  );
}
