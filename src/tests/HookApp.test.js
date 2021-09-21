import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import {HookApp} from '../HookApp';


describe('Preubas en <HookApp />', () => {
    
    test('debe mostrarse correctamente', () => {
        const wrapper =  shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
