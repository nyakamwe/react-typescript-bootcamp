import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo'


const TodoList = ({todos, setTodos}:{todos:Todo[], setTodos:React.Dispatch<React.SetStateAction<Todo[]>>})=> {
  return (
    <div className='todos'>
      {
        todos.map(todo=>(
            <SingleTodo 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
            />
        ))
      }
    </div>
  )
}

export default TodoList
