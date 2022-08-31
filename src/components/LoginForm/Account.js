import React, { useContext } from 'react'

import { LoginContext } from '../../context/LoginContext'

export default function Account() {
    const { accountContext, loginDispatch } = useContext(LoginContext)

    return (
        <>
            <input
                type="text"
                value={accountContext}
                onChange={(e) => {
                    loginDispatch({
                        type: 'SET_ACCOUNT',
                        value: e.target.value,
                    })
                }}
            />
            <div>目前account:{accountContext}</div>
        </>
    )
}
