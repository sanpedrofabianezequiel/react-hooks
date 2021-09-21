import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en <HomeScreen/>', () => {
    
    const user = {
        name:"ezequiel",
        email:"email@gmail.com"
    }
    const wrapper = shallow( //revisar como usar bien la libreria mount
       <UserContext.Provider value={{
           user:user
       }}>
           <HomeScreen/>
       </UserContext.Provider> 
    );


    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
