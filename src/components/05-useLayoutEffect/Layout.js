import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import {useCounter} from '../../hooks/useCounter';


export const Layout = () => {

    const {state,increment}  = useCounter(1); //state is COUNTER
   
   
   
    const {data} =useFetch(`https://breakingbadapi.com/api/quotes/${state}`);
   
    const [boxSize, setBoxSize] = useState({});
   
   
    const {author,quote} = !!data && data[0];


    const pTag = useRef();


    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effects</h1>
            <hr className="mb-10"/>

                    <blockquote className="blockquote text-right">
                      <p className="mb-10"  ref = {pTag} >{quote}</p>
                      <footer className="blockquote-footer">{author}</footer>
                    </blockquote>



             <pre>
                    {JSON.stringify( boxSize, null, 3)} 

             </pre>   

            <button className="btn btn-primary"
                    onClick={increment}
            >
                Next Card
            </button>

        </div>
    )
}
