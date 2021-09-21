import { shallow } from 'enzyme'
import React from 'react'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd'

describe('Pruebas en <TodoAdd/> ', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd
        handleAddTodo={handleAddTodo}
    />);
    test('Debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la funcion handleAddTodo', () => {
       
        const value = "Aprender React";
        wrapper.find('input').simulate('change',{
            target:{
                value:value,
                name:'description'
            }
        });//el segundo parama es el target

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));

        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc:value,
            done:false
        });

        expect(wrapper.find('input').props().value ).toBe('');
    });
    
})
