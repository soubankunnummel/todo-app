import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");

  function handlDelet (id ) {
     setTodo(todo => todo.filter((item) =>{
      return item.id !== id;
    }))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            data.trim() !== ''
             ? (
            setTodo([...todo, { id: Date.now(), text: data, status: false }]), setData('')  ) 
            :alert("please enter a todo text")
         
          }
          className="fas fa-plus"
        ></i>
      </div>
      {todo.map((obj) => (
        <div className="todos" key={obj.id}>
          <div className="todo">
            <div className="left">
              <input
                onChange={(e) => { 
                  console.log(e.target.checked);
                  console.log(obj);
                  setTodo(
                    todo.map(
                      (obj2) =>
                        obj2.id === obj.id
                          ? { ...obj2, status: e.target.checked }
                          : obj2

                      // if(obj2.id===obj.id){
                      //   obj2.status=e.target.checked
                      // }
                      // return obj2
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text} </p>
            </div>
            <div className="right">
              <i onClick={() =>  handlDelet (obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        </div>
      ))}
      {todo.map((obj) =>
        obj.status ? <h1 key={obj.id}>{obj.text} </h1> : null
      )}
    </div>
  );
}

export default App;
