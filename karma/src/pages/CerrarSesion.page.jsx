import { useContext, useEffect } from "react"
import { PostContext } from "../contexts/post.context"
import './CerrarSesion.page.scss';

export default function CerrarSesionPage(){

    const {cerrarSesion} = useContext(PostContext)

    useEffect(()=>{
        cerrarSesion()

    },[cerrarSesion])

    return(
        <h2 className="color">Aguarde miestras cerramos su sesion...</h2>
    )
}