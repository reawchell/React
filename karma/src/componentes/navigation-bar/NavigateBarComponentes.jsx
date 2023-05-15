import { Link } from "react-router-dom";
import '../NavigateBarComponentes.scss'
import { useContext } from "react";
import { PostContext } from "../../contexts/post.context";

export default function NavigateBarComponentes(){

    const {usuario} = useContext(PostContext)

    return(
        
        <nav className="nav">
            {usuario? <p>Bienvenid@ {usuario.email}</p>:''}
            <ul className="nav-ul">
                <li className="nav-li"><Link to="/">Home</Link></li>
                {
                    usuario? <li><Link to="/area-user">Area User</Link></li> : <li><Link to ="/login">Login</Link></li>
                }
                <li className="nav-li"><Link to="/posts">Posts</Link></li>
                <li className="nav-li"><Link to="/posts/nuevo">Crear Post</Link></li>

                {
                    usuario? <li className="nav-li"><Link to="/logout">Cerrar Sesión</Link></li> : ''
                }
                
            </ul>
        

        </nav>
    )
}