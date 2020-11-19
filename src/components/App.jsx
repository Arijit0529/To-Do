import React, { useState } from "react";
import TodoItem from "./TodoItem";

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

  function deleteItem(id) {
    addItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
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
          {item.map((todoItem, index) => (
            <TodoItem
              Key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
