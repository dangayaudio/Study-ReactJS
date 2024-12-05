import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactlogo from './assets/react.svg';

const App = () => {

  const code = "JS";

  const addNewTodo = (user) => {
    alert(`call me ${user}`);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Check Ca</div>
      <TodoNew addNewTodo={addNewTodo}>
      </TodoNew>

      <TodoData
        code={code}
      />

      <div className="todo-image">
        <img src={reactlogo} className='logo' />
      </div>
    </div>
  )
}

export default App
