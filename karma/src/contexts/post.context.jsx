import axios from "axios";
import { createContext, useEffect, useReducer} from "react";



const URL = 'http://localhost:3000'

export const PostContext = createContext()

export default function PostContextProvider({children}){

    // const [posts, setPosts] = useState([])
    // const [usuario, setUsuario] = useState(null)

    const INITIAL_STATE = {
        posts:[],
        usuario: null,
        postUnico: null
        
    }
    function reducer(state, action){
        const copia = {...state}
        switch(action.type){
            case 'GET_POSTS':
                // copia = {...copia, posts: action.payload}
                copia.posts = action.payload
            break
            case 'GET_POST_UNICO':
                copia.postUnico = action.payload
            break
            case 'ADD_POST':
                // copia = {...copia, posts: [...copia.posts, action.payload]}
                copia.posts.push(action.payload)
            break
            case 'LOGIN':
                copia.usuario = action.payload

            break
            case 'LOGOUT':
                copia.usuario = null

            break

            case 'CHANGE_NAME':
                copia.usuario.name = action.payload

            break

            default:break           

        }

        return copia
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(()=>{
        async function getPosts(){
            const res = await axios.get(URL+"/posts")
            // setPosts(res.data)
            dispatch({type:'GET_POSTS', payload: res.data})
        }

        getPosts()

    }, [])

    useEffect(()=>{
        try {
            const usuarioSave = JSON.parse(localStorage.getItem('_user'))
            dispatch({type:'LOGIN', payload: usuarioSave})
        } catch (error) {
//
        }
    }, [])

    async function addPost(nuevoPost){
        await axios.post(URL+"/posts", nuevoPost)

        // setPosts([...posts, nuevoPost])
        dispatch({type:'ADD_POST', payload: nuevoPost})
    }

    async function login(mail, password){
        const res = await axios.post(URL+"/login", {email: mail, password:password})
        // setUsuario(res.data.user)
        dispatch({type: 'LOGIN', payload: res.data.user})
        
        localStorage.setItem('_user'. JSON.stringfy(res.data.user))
    }

    async function registro(mail, password, nombre){
        await axios.post(URL+"/signup", {email:mail, password:password, name:nombre})
    }

    async function cambiarNombre(nuevoNombre){
        await axios.patch(URL+`/users/${state.usuario.id}`, {name: nuevoNombre})
        dispatch({type: 'CHANGE_NAME', payload: nuevoNombre})
    }

    function cerrarSesion(){
        dispatch({type: 'LOGOUT'})
    }

     async function getPostUnico(id){
        const resp = await axios.get(URL+ `/posrts/${id}`)
        dispatch({type: 'GET_POST_UNICO', payload:resp.data})
     }


    return(
        // <PostContext.Provider value={{ posts, usuario, addPost, login}}>
        <PostContext.Provider value={{ posts: state.posts, usuario: state.usuario, postUnico: state.postUnico, addPost, login, registro, cambiarNombre, cerrarSesion, getPostUnico}}>
            {children}
        </PostContext.Provider>
    )
}