import React from 'react';
import { renderHook,act} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';


describe('Pruebas en use Fetch', () => {
    
    test('debe de retornar la informacion por defecto (sincrono)', () => {
        const url = 'https://breakingbadapi.com/api/quotes/1';
        const {result} = renderHook(()=> useFetch(url));
        
        const {data, loading,error} =result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })

    //necesitamos antes de usar ASYNC extraer el waitForNextUpda
    test('debe de tener la info deseada, loading false, error,false',async () => {
        const url = 'https://reqres.in/apid/users?page=2';
        const {result, waitForNextUpdate} = renderHook(()=> useFetch(url));
        
        await waitForNextUpdate();

        const {data, loading,error} =result.current;    

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('no se pudo cargar la info');
    })
    
  
    
})
