import React from 'react';
import {shallow} from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import '@testing-library/jest-dom';
import { demoTodo } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {
    
    const handleDelete= jest.fn();
    const handleToggle= jest.fn();

    const wrapper =  shallow(<TodoList
                        state={demoTodo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />);


    test('debe de mostrarse correctemente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener 2 <TodoList/> ', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );
        expect(wrapper.find('TodoListItem').at(1).prop('handleDelete')).toEqual( expect.any(Function) );
    })
    
    
})
