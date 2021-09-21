import React from 'react';
import {shallow,mount} from 'enzyme';
import '@testing-library/jest-dom'
import {LoginScreen} from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en  <LoginScreen/>', () => {
    
    const user = {
        id:1234,
        name:'noelia'
    }

    const handdleButton = jest.fn();

    const wrapper = shallow( //Mount requiere react 16 no 17
        
    <UserContext.Provider value = {{
        user:user,
        setUser:handdleButton
    }}>
        <LoginScreen />
    </UserContext.Provider>
    
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    /*test('debe de ejecutar el setUser con el argumento esperado', () => {
       // wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();

        expect(handdleButton).toHaveBeenCalledWith( expect.any(Object));
        
        expect(handdleButton).toHaveBeenCalledWith({
            id:1234,
            name:'noelia'
        });
    })*/
    
    
})
