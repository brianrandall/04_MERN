import React, { useState } from 'react'
import './App.css';

function Todo ({todo, index, completeToDo, removeToDo}) {
  return (
    <div className='todo' style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      {todo.text}
          <div>
            <button onClick={() => completeToDo(index)}>Complete</button>
            <button className='remove' onClick={() => removeToDo(index)}>x</button>
          </div>
    </div>
  )
}

function ToDoForm ({addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' className='input' value={value} onChange={e => setValue(e.target.value)}/>
      <input type='submit' value='noo tooo doooooo' className='input'></input>
    </form>
  )
}

function App() {

  const [toDos, setToDos] = useState ([])

  const addTodo = text => {
    const newTodos = [...toDos, {text}]
    setToDos(newTodos)
  }

  const completeToDo = index => {
    const newTodos = [...toDos]
    newTodos[index].isCompleted = true
    setToDos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...toDos]
    newTodos.splice(index, 1)
    setToDos(newTodos)
  }

  return (
    <div className="App">
      <div className='todo-list'>
        {toDos.map((todo, index) => (
          <Todo 
            key = {index}
            index = {index}
            todo = {todo}
            completeToDo = {completeToDo}
            removeToDo = {removeTodo}
          />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
