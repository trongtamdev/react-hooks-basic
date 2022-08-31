import logo from './logo.svg';
import './App.scss';
import ColorBox from './components/ColorBox';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo){
    console.log(todo)
    const index = todoList.findIndex(x => x.id===todo.id);
    if(index <0) return;

    const newTodoList= [...todoList];
    newTodoList.splice(index,1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit (formValues){
    console.log('Form submit:' ,formValues)
    const newTodo={
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList=[...todoList] ;
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React Hooks - TodoList</h1>


      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>

      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
