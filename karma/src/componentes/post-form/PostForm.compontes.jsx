// import axios from "axios"
import { useContext, useState } from "react"
import { PostContext } from "../../contexts/post.context"
// import axios from "axios"


export default function PostFormComponentes(){

    const [post, setPost] = useState({titulo: '',imagen:'', texto: '', autor: '', estilo: ''})
    // const [msg, setMsg] = useContext('')
    const {addPost} = useContext(PostContext)

    function modificaCampos(e){
        setPost( {...post, [e.target.name]: e.target.value})
    }

    async function crearPost(){
        // try {
        await addPost(post)
        // } catch (e) {
            // setMsg(e.message)
        
    //    await axios.post('http://localhost:3000/posts', post)
       alert('PARABÉNS, VOCÊ CRIOU UM POST')
       
        // await addPost(post)
       
        setPost({titulo:'',imagen:'', texto:'', autor:'', estilo:''})
    }

    return(
        <div className="tdo">
        <h1>POST NUEVO</h1>
            <div>
                <input name="titulo" value={post.titulo} onChange={modificaCampos} placeholder="titulo"></input>
            </div>

            <div>
                <input name="imagen" value={post.imagen} onChange={modificaCampos} placeholder="imagen"></input>
            </div>




            
            <div>
                <input name="estilo" value={post.estilo} onChange={modificaCampos} placeholder="estilo"></input>
            </div>
            <div>
                <input name="autor" value={post.autor} onChange={modificaCampos} placeholder="autor"></input>
            </div>
            <div>
                <textarea name="texto" value={post.texto} onChange={modificaCampos} placeholder="texto"></textarea>
            </div>
            <div>
                <button onClick={crearPost}>
                    Crear
                </button>
            </div>
            {/* {msg? <div> */}
                {/* <small>{msg}</small> */}
            {/* </div> : ''} */}
        </div>
    )
}