import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import {useCounter} from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const {state,increment} =  useCounter(5000); //State== Counter
    const [show, setShow] = useState(true);

    /*
    const procesoPesado = (iteraciones)=>{
        for (let i = 0; i < iteraciones; i++) {
          console.log('Started...');
        }
        return `${iteraciones} iteraciones realizadas`;
    }*/

    //Se ejecuta el proceso pesado solo cuando el STATE/COUNTER cambia, para evitar que esta funcion
    //tome mucha memoria de mas
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> {state} </small> </h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>


            <button
                className="btn btn-outline-primary ml-3"
                onClick= { ()=>{
                    setShow(!show);
                    }
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
