import { useEffect } from "react"
import { useState } from "react/cjs/react.development"


export const useFetch = (url)=>{
    const [state, setState] = useState({data:null,loading:true,error:null})

    useEffect(() => {

        //limpiamos para ver el Loading
        setState({data:null,loading:true,error:null});

        fetch(url)
            .then( x => x.json())
            .then( data =>{
                setState({
                    loading:false,
                    error:null,
                    data:data
                });
            })        

    }, [url]);
    return state;
}