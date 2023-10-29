import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaCheck,
  FaEdit,
  FaPlusCircle,
  FaRegEdit,
  FaTrash,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const completed = useSelector((state) => state.completed);
  const inprogress = useSelector((state) => state.inprogress);
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [dataUpdate, setDataUpdate] = useState();

  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      type: "todo",
    };
    dispatch({
      type: "ADD_TODO",
      data: todo,
    });
    setInput("");
  };

  const addToProgress = (id) => {
    let data = todos.find((x) => x.id === id);
    data.type = "inprogress";
    dispatch({
      type: "ADD_INPROGRESS",
      data,
    });
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  };

  const deleteInprogress = (id) => {
    dispatch({
      type: "REMOVE_INPROGRESS",
      id,
    });
  };
  const addtoCompleted = (id) => {
    let data = inprogress.find((x) => x.id === id);
    data.type = "completed";
    dispatch({
      type: "ADD_COMPLETED",
      data,
    });
    dispatch({
      type: "REMOVE_INPROGRESS",
      id,
    });
  };

  const updateTodo = () => {
    dataUpdate.text = input;
    console.log(dataUpdate);
    dispatch({
      type: "UPDATE_TODO",
      data: dataUpdate,
      title: dataUpdate.type,
    });
    setInput("");
    setIsUpdate(false);
  };

  const handleClickUpdateTodo = (id, title) => {
    let data;
    if (title === "INPROGRESS") {
      data = inprogress.find((inprogres) => inprogres.id === id);
    } else {
      data = todos.find((todo) => todo.id === id);
    }
    setInput(data.text);
    setDataUpdate(data);
    setIsUpdate(true);
  };

  useEffect(() => {}, [todos, inprogress]);

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">Todo List App</h3>
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Todo"
            name="text"
            value={input}
          />
          {isUpdate ? (
            <button type="button" className="btn" onClick={() => updateTodo()}>
              <FaRegEdit className="icon" />
            </button>
          ) : (
            <button type="button" className="btn" onClick={() => addTodo()}>
              <FaPlusCircle className="icon" />
            </button>
          )}
        </form>
        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title">Todo All</h3>
            {todos.toReversed().map((item, index) => (
              <div key={index} className="todo_card">
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToProgress(item.id)}
                  className="icon-check-todo"
                />
                <FaEdit
                  onClick={() => handleClickUpdateTodo(item.id)}
                  className="icon-edit-todo"
                />
                <FaTrash
                  onClick={() => deleteTodo(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Progress</h3>
            {inprogress.toReversed().map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.text}</p>
               
                <FaCheck
                  onClick={() => addtoCompleted(item.id)}
                  className="icon-progress-todo"
                />
                 <FaEdit
                  onClick={() => handleClickUpdateTodo(item.id, "INPROGRESS")}
                  className="icon-edit-todo"
                />
                <FaTrash
                  onClick={() => deleteInprogress(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Completed</h3>
            {completed.toReversed().map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
