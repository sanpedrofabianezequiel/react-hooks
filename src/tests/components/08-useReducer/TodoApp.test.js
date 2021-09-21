import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Preubas en <TodoApp />', () => {

    const wrapper =  shallow(<TodoApp/>);

    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();    
    })
    
    
})


