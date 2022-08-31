// 引入useRef
import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
    const {
        accountContext,
        setAccountContext
    } = useContext(LoginContext)

    return (
        <>
            <input
                type="text"
                value={accountContext}
                onChange={(e) => {
                    setAccountContext(e.target.value)
                }}
            />
            <div>目前account:{accountContext}</div>
        </>
    )
}
export default LoginForm;