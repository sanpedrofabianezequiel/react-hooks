import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init  = ()=>{
   
    return JSON.parse(localStorage.getItem('state')) || [];

    /* return[{
        id: new Date().getTime(),
        desc:'Aprender React',
        done:false
    }];*/
} 

    

export const TodoApp = () => {

    //el primer parametro del reducer es el promiamente dicho
    //el reducer con el state y la accion
    const [state, dispatch] = useReducer(todoReducer, [], init);
  



    useEffect(() => {
        localStorage.setItem('state',JSON.stringify(state));    
    }, [state]);


    const handleAddTodo= (newTodo)=>{
        dispatch({
            type:'add',
            payload:newTodo
        });
    }

   

    const handleDelete = (todoId) =>{
        //1.Create Model
        //2.Create Action
        const action = {
            type: 'delete',
            payload:todoId
        }
        dispatch(action);
    }

    const handleToggle=(todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }
    return (
        <div>
            <h1> ({ state.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                      <TodoList 
                        state={state}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                      />
                </div>
                <div className="col-5">
                    <TodoAdd 
                    
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
