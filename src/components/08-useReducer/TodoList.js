import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({state,handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
        {
            state.map( (todo,i)=>
                    ( 
                        <TodoListItem 
                            key={todo.id}
                            todo={todo}
                            i={i}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    )
            )
        }
        </ul>
    )
}
