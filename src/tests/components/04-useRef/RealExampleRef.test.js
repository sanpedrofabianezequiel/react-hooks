import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef/>', () => {
    
    const wrapper =  shallow(<RealExampleRef/>);

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        //to default that component should not exists
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('debe de mostrar el componente<MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
    
})
