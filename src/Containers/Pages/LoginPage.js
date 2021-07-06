import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

/**
* @author
* @function LoginPage
**/


const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const user = useSelector((state) => state.userData);
    const handleLogin = () => {
      
        // const isError = (errorMsg) => {
        //     setErrorMessage(errorMsg);
        //     setIsError(true);
        //     setTimeout(() => {
        //         setIsError(false);
        //     }, 1500);

        const loginEmail = user.email, loginPassword = user.password;
        if (loginEmail !== email || loginPassword !== password) {
            setErrorMessage('Invalid Login Credential');
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
        }
        else if(loginEmail ==="" || loginPassword ===""){
            setErrorMessage('Invalid Login Credential');
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 1500);
        }
        else {
            props.history.push('/home');
        }
    }
    return (
        <>
            <div className="container">
                {
                    isError && (<div style={{ width: "50%", margin: "30px auto", marginTop: "30px" }} id="error" className="alert alert-danger"
                        role="alert">
                        {errorMessage}
                    </div>)
                }
                <div style={{ width: "50%", margin: "50px auto" }} className="jumbotron">
                    <div style={{ textAlign: "center", color: "blue", marginTop: "-10px" }}>
                        <h2>Login Form</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="emailemailLogin">Email</label>
                            <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailLogin" placeholder="Enter Email Id" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordpasswordLogin">Password</label>
                            <input required type="password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="form-control" id="passwordLogin"
                                placeholder="Enter Password" />
                        </div>
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                        <button style={{ marginLeft: "10px" }} className="btn btn-danger">
                            <Link style={{ textDecoration: "none", color: "white" }} to="/">Regester Here</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LoginPage