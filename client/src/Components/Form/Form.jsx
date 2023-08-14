import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {createUser, login} from "../../redux/actions";
import validation from "../../utils/validationsLogIn";
import style from "./Form.module.css";


const Form = () => {  
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [register, setRegister] = useState(false)
    const [errors, setErrors]= useState({});
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validation({...userData, [event.target.name]: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(login(userData));
    };

    const registerOn = () => {
        setRegister(true);
    };

    const registerHandler = (event) => {
        event.preventDefault();
        dispatch(createUser(userData))
        setRegister(false);
    };

    const backLogin = () => {
        setRegister(false);
    }
    
    useEffect(() => {
        if (user) {
          navigate('/home');
        }
    }, [user, dispatch, navigate]);
    
return (

register === false ?
<form onSubmit={submitHandler}>
    <div>
        <div className={style.email}>
            <label htmlFor="email">email: </label>
            <input 
                placeholder="Ingrese su email"
                type="text" 
                key="email" 
                name="email" 
                value={userData.email} 
                onChange={handleChange} 
                className={errors.email ? style.errors : style.succes}
                /><br/>
           {errors.email ?  <span className={style.errorEmail}>{errors.email}</span> : null}
        </div>
        <div className={style.pass}>
        <label htmlFor="password">password: </label>
            <input 
                placeholder="password.."
                type="password" 
                key="password" 
                name="password" 
                value={userData.password} 
                onChange={handleChange} 
                className={errors.password ? style.errors : style.succes}
                /><br/>
            {errors.password ? <span className={style.errorPass}>{errors.password}</span> : null}
        </div>
    </div>
    <button type="submit" className={style.boton}>Login</button>
    <div className={style.divCreate}>
        <span className={style.span}>If you don't have an account yet, register</span>
        <button className={style.aqui} onClick={registerOn}>HERE</button>
    </div>
</form>
: <form onSubmit={registerHandler}>
<div>
    <div className={style.name}>
            <label htmlFor="name">Name: </label>
            <input 
                placeholder="Ingrese su nombre"
                type="text" 
                key="name" 
                name="name" 
                value={userData.name} 
                onChange={handleChange} 
                className={errors.name ? style.errors : style.succes}
                /><br/>
    </div>
    <div className={style.email}>
        <label htmlFor="email">email: </label>
        <input 
            placeholder="Ingrese su email"
            type="text" 
            key="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            className={errors.email ? style.errors : style.succes}
            /><br/>
       {errors.email ?  <span className={style.errorEmail}>{errors.email}</span> : null}
    </div>
    <div className={style.pass}>
    <label htmlFor="password">password: </label>
        <input 
            placeholder="password.."
            type="password" 
            key="password" 
            name="password" 
            value={userData.password} 
            onChange={handleChange} 
            className={errors.password ? style.errors : style.succes}
            /><br/>
        {errors.password ? <span className={style.errorPass}>{errors.password}</span> : null}
    </div>
</div>
<div className={style.botones}>
    <button type="submit" className={style.boton1}>Register</button> 
    <button className={style.boton} onClick={backLogin}>Login</button>
</div>

</form>
)
};

export default Form;