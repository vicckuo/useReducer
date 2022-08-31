import React, { useContext } from 'react'

import { LoginContext } from '../../context/LoginContext'

export default function Password() {
    const { passwordContext, loginDispatch } = useContext(LoginContext)

    return (
        <>
            <input
                type="text"
                value={passwordContext}
                onChange={(e) => {
                    loginDispatch({
                        type: 'SET_PASSWORD',
                        value: e.target.value,
                    })
                }}
            />
            <div>目前password:{passwordContext}</div>
        </>
    )
}
