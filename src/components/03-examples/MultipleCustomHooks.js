import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';


export const MultipleCustomHooks = () => {

    const {state,increment}  = useCounter(1); //state is COUNTER
    const {loading,data} =useFetch(`https://breakingbadapi.com/api/quotes/${state}`);
    const {author,quote} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr className="mb-10"/>

            {
                (loading) 
                ? (
                    <div className="alert alert-info text-center">
                      Loading...
                    </div>
                  )
                :(
                    <blockquote className="blockquote text-right">
                      <p className="mb-10">{quote}</p>
                      <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                 )
            }
            
            <button className="btn btn-primary"
                    onClick={increment}
            >
                Next Card
            </button>

        </div>
    )
}
