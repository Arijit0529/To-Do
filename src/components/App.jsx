import React, { useState } from "react";

function App() {
  const [text, addtext] = useState("");
  const [item, addItem] = useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    addtext(newText);
  }

  function addElement() {
    addItem((prevItem) => {
      return [...prevItem, text];
    });
    addtext("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
