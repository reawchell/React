import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../contexts/post.context";
import "./SignupForm.componentes.scss";
import "tailwindcss/tailwind.css";

export default function SignupFormComponentes(){
    const {registro} = useContext(PostContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [nombre, setNombre] = useState('')
    const [verPassword, setVerPassword] = useState(false)
    const[msgSuccess, setMsgSuccess] = useState('')
    const [msgError, setMsgError] = useState('')

    async function intentoRegistro(){
    try{
        await registro(email,password,nombre)
        setEmail('')
        setPassword('')
        setPassword2('')
        setNombre('')
        setVerPassword(false)
        setMsgSuccess('Usuario Registrado')
        setMsgError('')
    }catch(error){
        setMsgSuccess('')
        setMsgError('error.response.data')
    }

    }


    return (
        <div  className="tdo">
            <div className="form-group">
            <h1>REGISTRO</h1>
                <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="nombre" />
            </div>
            <div className="form-group">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" />
            </div>
            <button onClick={()=>setVerPassword(!verPassword)}>{verPassword?'👁': '🕶'}</button>

            <div className="form-group">
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type={verPassword?'text':'password'} placeholder="password" />
            </div>
            <div className="form-group">
                <input value={password2} onChange={(e)=> setPassword2(e.target.value)} type={verPassword?'text':'password'} placeholder="repite password" />
            </div>
            <div className="form-group">
                {password2==password? '':<small style={{color:'purple'}}>*El password no coincide*</small>}
            </div>
            <div className="form-group">
                {msgError? <small style={{color:'purple'}}>*Este email ya está registrado*</small>:''}
            </div>
            <div className="form-group">
                {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>:''}
            </div>
            <div className="form-group">
                <button disabled={password2!==password} onClick={intentoRegistro}>registrar</button>
            </div>
            
            <small>Si ya estás registrado? <Link to="/login"> Logueate</Link></small>
        </div>
    )
}