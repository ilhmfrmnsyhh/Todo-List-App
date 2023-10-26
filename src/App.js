import './App.css';
import {FaCheck, FaPlusCircle, FaTrash} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="title">Todo List App</h3>
          <form className="form_todo">
            <input type="text" className="form-control" placeholder='Enter Your Todo' name="text"/>
            <button type="button" className="btn"><FaPlusCircle className="icon"/></button>
          </form>
        <div className='todos_wrapper'>
          <div className='todos_list'>
            <h3 className='todo_title'>Todo-List</h3>
              <div className='todo_card'>
                <p className='card_text'>some text here</p>
                  <FaCheck className='icon-check-todo'/>
                  <FaTrash className='icon-trash-todo'/>
              </div>
          </div>
          <div className='todos_list'>
            <h3 className='todo_title'>In Progress</h3>
              <div className='progress_card'>
                <p className='card_text'>some text here</p>
                  <FaCheck className='icon-progress-todo'/>
              </div>
          </div>
          <div className='todos_list'>
            <h3 className='todo_title'>Completed</h3>
              <div className='completed_card'>
                <p className='card_text'>some text here</p>
                  <FaCheck className='icon-check-todo'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
