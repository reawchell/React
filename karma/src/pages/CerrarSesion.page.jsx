import { useContext, useEffect } from "react"
import { PostContext } from "../contexts/post.context"

export default function CerrarSesionPage(){

    const {cerrarSesion} = useContext(PostContext)

    useEffect(()=>{
        cerrarSesion()

    },[cerrarSesion])

    return(
        <h2>Aguarde miestras cerramos su sesion...</h2>
    )
}