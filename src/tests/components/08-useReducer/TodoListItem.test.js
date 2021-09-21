import React from 'react';
import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodo } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoListItem />', () => {
    

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper  = shallow(<TodoListItem
        todo={demoTodo[0]}
        i={1}
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
    />);
    



    test('debe de mostra el componente ', () => {
         expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de llamar a la funcion handleDelete', () => {
        //jest.fn();
        //toHaveBeenCalled
        //toHaveBeenCalledWith
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodo[0].id);

    });

    test('debe de llamar la funcion handleToggle', () => {
        //toHaveBeenCalled
        //toHaveBeenCalledWith
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodo[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        const  p = wrapper.find('p');

        expect(p.text().trim()).toBe(`2. ${demoTodo[0].desc}`)
    })
    
    test('debe de tener la clase complete si el TODO.done = true', () => {
      
        const todo = demoTodo[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem todo={todo} />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    

})
