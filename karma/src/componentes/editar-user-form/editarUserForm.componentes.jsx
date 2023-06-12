import { useContext, useState } from "react"
import { PostContext } from "../../contexts/post.context"
import './editarUserForm.componentes.scss';


export default function EditarUserComponentes(){
    
    const {usuario, cambiarNombre} = useContext(PostContext)
    const[nombre, SetNombre] = useState(usuario?usuario.name:'')

    async function update(){
        try {
            await cambiarNombre(nombre)
        }catch (error) {
            alert(error.response.data)
        }

    }
    
    return(
        <div className="tdo">
        <h1>USER</h1>
            <div>
                <input className="datos" value={usuario?usuario.email: ''} type="email" readOnly={true}></input>
            </div>
            <div>
                <input className="datos" value={nombre} onChange={(e)=>SetNombre(e.target.value)} type="text" placeholder="nombre"></input>
            </div>
            <div>
                <button className="accion" onClick={update}>Guardar Cambios</button>
            </div>
        </div>
    )
    
}