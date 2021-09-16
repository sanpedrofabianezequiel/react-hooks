import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const AboutScreen = () => {

    const {user,setUser}= useContext(UserContext);

    const handleClick=()=>{
        setUser({});
    };

    return (
        <div>
            <h3>AboutScreen</h3>
            <hr/>

            <pre>
                {JSON.stringify(user,null,3)}
            </pre>

            <button className="btn btn-warning" onClick={handleClick}>
                Limpiar
            </button>
        </div>
    )
}
