import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { PostContext } from "../contexts/post.context"
import PostComponentes from "../componentes/post/Post.componentes"

export default function PostPage(){
    const {getPostUnico, postUnico} = useContext(PostContext)
    const {id} = useParams();

    useEffect(()=>{
        getPostUnico(id)

    },[id, getPostUnico]);

    return (
        <>
        
        <h1>POST UNICO</h1>
       
        <main>
            BODY POST UNICO
            <h2> Este es el Post: {id}</h2>
            <Link key={postUnico.id}to={`${postUnico.id}`}>
            
            {postUnico?
            <PostComponentes post={postUnico}></PostComponentes>: 
            'NO EXISTE POST'}
            </Link>
 
        </main>
    </>
    )
}
