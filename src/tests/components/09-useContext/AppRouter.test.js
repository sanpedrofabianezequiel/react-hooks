import React from 'react';
import {shallow,mount} from 'enzyme';
import '@testing-library/jest-dom';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en <AppRouter/>', () => {
    
    const user =  {
        id:123,
        email:"user@email.com"
    }

    const wrapper =  shallow(
    
        <UserContext.Provider value={
            {user:user}
        }>
            <AppRouter/>
        </UserContext.Provider>
        
    );
    test('de de mostrarse el correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
