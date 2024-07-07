import React from 'react'
import { useState } from 'react'
import './App.css';

function App() {
  const [item, setitem] = useState();
  const [list, setlist] = useState([]);
  const handletext = (e) => {
    setitem(e.target.value);
  }

  const handleAdd = () => {
    setlist([...list, item]);
    setitem("");
  }

  const handledel = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setlist(newList);

  }

  return (
    <div>
      <div>
        <h1 className='title'>ToDo Lists</h1>
      </div>
      <div className='list'>
        <input onChange={handletext} placeholder='add an item' type='text' value={item}></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className='li'>
        <ul>
          {list.map((item, index) => {
            return <li key={index}> {item} {<button onClick={() => handledel(index)}>x</button>} </li>

          })}
        </ul>
      </div>
    </div>
  )
}

export default App