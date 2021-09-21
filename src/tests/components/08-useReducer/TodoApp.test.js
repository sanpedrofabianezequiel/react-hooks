import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import {demoTodo} from '../../fixtures/demoTodos';

describe('Preubas en <TodoApp />', () => {

    const wrapper =  shallow(<TodoApp/>);
    Storage.prototype.setItem = jest.fn(()=>{})
    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    });


    /*test('debe de agregar un TODO', () => {
        const wrapper =  mount(<TodoApp />);
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('(2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });*/
    
    test('debe de eliminar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('(0)');
    })
    
  
    
    
})


