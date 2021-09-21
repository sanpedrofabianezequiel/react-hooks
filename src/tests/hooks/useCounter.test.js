import React from 'react';
import '@testing-library/jest-dom';
import {renderHook ,act} from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';


describe('Prueba de useCounter', () => {
    
    test('debe de retornar valores por defecto ', () => {
        const {result} = renderHook( ()=> useCounter());
        //console.log(result.current); traer todo el return del hook
        expect(result.current.state).toBe(10);//Default Value
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe de tener el counter/state en 100 ', () => {
        const {result} = renderHook( ()=> useCounter(100));
        //console.log(result.current); traer todo el return del hook
        expect(result.current.state).toBe(100);//
    });

    test('debe de sumar 1 la funcion incremente', () => {
        //NECESITAMOS ACT de esta libreria de testing-library/react-hooks
        const {result }  = renderHook(()=> useCounter(100));
        const { increment} = result.current;

        act(()=>{
            increment();
        });

        expect(result.current.state ).toBe(101);
    });

    test('debe de restar 1 a la funcion decrement', () => {
        const {result} =  renderHook(()=> useCounter(100));
        const {decrement } =result.current;

        act(()=>{
            decrement();
        });

        expect(result.current.state).toBe(99);
    })

    test('debe de resetiar a 100 a la funcion decrement/incremente', () => {
        const {result} =  renderHook(()=> useCounter(100));
        const {decrement,reset } =result.current;

        act(()=>{
            decrement();
            reset();
        });

        expect(result.current.state).toBe(100);
    })

    
    

})
