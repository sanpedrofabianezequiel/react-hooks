import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {
    
    test('debe retornar el estado por defecto', () => {
      
        const state = todoReducer(demoTodo,{});
        expect(state).toEqual(demoTodo);
    })

    test('debe de agregar un TODO ', () => {
        const newTodo={
            id:3,
            desc:"aprender .Net",
            done:true
        };

        const action = {
            type:'add',
            payload:newTodo
        }



        const state = todoReducer(demoTodo,action);

        expect(state.length).toBe(3);

        //esperamos que tengas todos los valores del array anterior mas el nuevo elemento
        expect(state).toEqual( [...demoTodo,newTodo]);
        
    });

    test('debe de borrar un TODO', () => {
       const action = {
           type:'delete',
           payload: 2
       }
        const state = todoReducer(demoTodo,action);
        
        expect(state.length).toBe(1);
        expect(state[0]).toEqual(demoTodo[0]);//A ver si quedo ese elemento solamente
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type:'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodo,action);

        expect(state[0].done).toBe(true);  
        expect(state[1]).toEqual(demoTodo[1]);
    })
    
    
    
    
})
