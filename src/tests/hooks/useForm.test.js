import React from 'react';
import'@testing-library/jest-dom';
import {reactHook,act, renderHook} from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
    
    const initialForm={
        name:"ezequiel",
        email:"email@gmail.com"
    }

    test('debe regresa un formulario por defecto', () => {
        const {result} = renderHook(()=> useForm({}));
        //console.log(result.current);
        const [formValues,handleInputChange,reset] =result.current;
        expect(formValues).toEqual({});
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset).toBe('function');
    })
    
    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value:"value name modificado"
                }
            }); 
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({
            ...initialForm,
            name:"value name modificado"
        })
    });

    test('debe de re-establecer el formulario con REST', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [ , handleInputChange,resetForm] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:"name",
                    value:"value name modificado"
                }
            }); 

            resetForm();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    })
    
    
})
