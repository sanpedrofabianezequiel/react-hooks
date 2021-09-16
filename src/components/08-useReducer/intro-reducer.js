//Crear un objeto inicial para el todoReducer
//llamarlo e inicializarlo con LET
//enviarle al todoReducer  un  state + action  => action debe tener  type + payload 
const initialState =[{
    id:1,
    todo:"Comprar pan",
    done:false,
}];


const todoReducer = (state = initialState, action)=>{

    if(action?.type === 'add'){
        return [...state , action.payload];
    }

    return state;
}

const newTodo =[{
    id:2,
    todo:"Comprar leche",
    done:false,
}];

let todoInit = todoReducer();   //Inicializacion

const action ={
    type:'add',
    payload: newTodo,
}

console.log(todoReducer(todoInit ,action));