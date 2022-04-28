import './App.css';
import {useEffect, useState} from 'react';
import Form from "./components/Form"
import List from './components/List';

function App() {

  const [todoList, setTodoList] = useState([]);

  useEffect(()=> {
    console.log(todoList)
  }, [todoList])

  const handleAdd = (todo) =>{
    setTodoList([...todoList, todo])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form handleAdd={handleAdd}/>
        <List todoList={todoList}/>
      </header>
    </div>
  );
}

export default App;
