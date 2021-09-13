import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    //Podemos recivir del componenete Hijo ShowIncremente en el
    //UseCallBack mediante el parametro el valor => num
    //para eliminar ladependencia debemos usar una funcion callback tambien
    //example: en ves de setCounter( counter + 1)   setCounter( x => x+1 );

    const increment = useCallback((param)=>{
        // Con dependencia
        //setCounter(counter + 1);
        //sin dependencia + recivir el 5 del comp hijo por parametros
        setCounter(x=> x + param);
    },[setCounter]);

    return (
        <div>
            <h1>useCallback Hook : {counter} </h1>
            <hr/>

            <ShowIncrement increment={increment} />

        </div>
    )
}
