import React, { useContext } from 'react'
import { UserContext } from './UseContext';

export const LoginScreen = () => {

    const {user,setUser}= useContext(UserContext);

    const newUser={
        id:123,
        name:'noelia'
    }
    return (
        <div>
            <h3>LoginScreen</h3>
            <hr/>

            <button className="btn btn-primary" onClick={ () => setUser(newUser)}>
                Login
            </button>
        </div>
    )
}
