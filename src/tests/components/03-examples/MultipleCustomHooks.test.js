import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import {useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');



describe('Pruebas en <MultipleCustomHooks />', () => {

    
   

    test('debe de mostrarse correctamente', () => {

        //Como aca se llama al componente por primera vez necesitamos inicializar el useFetch
        //con la data " que va a devolver"
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });


        const wrapper= shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('shoul debe de mostar la informacion', () => {
        
        //Como aca se llama al componente por primera vez necesitamos inicializar el useFetch
        //con la data " que va a devolver"
        useFetch.mockReturnValue({
            data:[{
                author:"Ezequiel",
                quote:"Hola mundo"
            }],
            loading:false,
            error:null
        });

        const wrapper= shallow(<MultipleCustomHooks/>);
        //console.log(wrapper.html());

        expect(wrapper.find('.alert').exists() ).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Ezequiel');

    })
    
})
