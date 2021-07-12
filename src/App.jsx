import React, { useEffect, useState } from "react";

export default function App() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginUnclean, setLoginUnclean] = useState(false);
    const [passwordUnclean, setPasswordUnclean] = useState(false);
    const [loginErr, setLoginErr] = useState('Login can not be empty');
    const [passwordErr, setPasswordErr] = useState('Password can not be empty');
    const [formValid, setFormValid] = useState(false)

    // const inputLog = document.querySelector('.input__login');
    // const inputPass = document.querySelector('.input__pass');
    useEffect(() => {
        if (loginErr || passwordErr) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginErr, passwordErr]);

    const handleLoginClick = () => {
        setLogin("");
        setPassword("");
        console.log(`Login is ${login}`);
        console.log(`Password is ${password}`);
    };


    const loginHandler = (e) => {
        setLogin(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e.target.vale).toLowerCase())) {
            setLoginErr('Invalid login')
        } else {
            setLoginErr('');
        }
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 16) {
            setPasswordErr('Password must be longer than 3 and 16 characters')
        } if (!e.target.value) {
            setPasswordErr('Password can not be empty')
        }
        else {
            setPasswordErr('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginUnclean(true)
                break
            case 'password':
                setPasswordUnclean(true)
                break
        }
    }

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "grid",
                placeItems: "center",

            }}
        >
            <div
                style={{
                    width: 200,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                Login
                {(loginUnclean && loginErr) && <div style={{ color: 'red' }}>{loginErr}</div>}
                <input
                    onChange={e => loginHandler(e)}
                    value={login}
                    onBlur={e => blurHandler(e)}
                    className='input__login'
                    style={{ margin: 8 }}
                    placeholder='Enter your login...'

                />
                Password
                {(passwordUnclean && passwordErr) && <div style={{ color: 'red' }}>{passwordErr}</div>}
                <input
                    onChange={e => passwordHandler(e)}
                    value={password}
                    onBlur={e => blurHandler(e)}
                    className='input__pass'
                    type='password'
                    style={{ margin: 8 }}
                    placeholder='Enter your password..'
                />
                <button
                    disabled={!formValid}
                    style={{ margin: 8, }}
                    type='submit'
                    onClick={handleLoginClick}>
                    login

                </button>
            </div>
        </div>
    );
}