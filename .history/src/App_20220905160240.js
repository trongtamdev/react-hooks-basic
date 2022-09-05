import logo from './logo.svg';
import './App.scss';
import queryString from 'query-string';
import ColorBox from './components/ColorBox';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] =useState({
    _limit: 10,
    _page: 1,
  })



  useEffect(() => {
    async function fetchPostList(){
      //...
      try {
        const paramsString = queryString.stringify(filters); 
        const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});
  
        const {data , pagination}= responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
      
    }

    fetchPostList();
  },[filters]);


  function handlePageChange (newPage) {
    console.log('New Page: ', newPage)
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

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

  function handleFiltersChange(newFilters){
    console.log('New Filters: ', newFilters)
    setFilters
  }

  return (
    <div className="App">
      <h1>React Hooks - Post List</h1>


      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick}/> */}

      <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}
      />


      {/* <ColorBox /> */}
    </div>
  );
}

export default App;
