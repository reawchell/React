import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { PostContext } from "../../contexts/post.context";
import "./LoginForm.componentes.scss";

export default function LoginFormComponentes(){

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const[msgSuccess, setMsgSuccess] = useState('')
    const [msgError, setMsgError] = useState('')

    const {login, usuario} = useContext(PostContext)

    async function intentoLogin(){
        try{
            await login(mail, password)
            setMsgSuccess('Login correcto')
            setMsgError('')
        }catch(error){
            setMsgSuccess('')
            setMsgError('Password Incorrecto')

        }
        

    }

    if(usuario){
        return(
             <Navigate to="/area-user" replace></Navigate>
        )
    }
    else{
        return (
            <div className="tdo">
            <h1>LOGIN</h1>
                <div>
                    <input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" placeholder="email" />
                </div>
                <div>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" />
                </div>
                <div>
                    {msgError? <small style={{color:'purple'}}>*Este email ya está registrado*</small>:''}
                </div>
                <div>
                    {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>:''}
                </div>
                <div>
                    <button onClick={intentoLogin}>login</button>
                </div>
                <small>Aún no estás registrado? <Link to="/signup"> Registrate aqui</Link></small>
            </div> 
        )   

    }   
    
}