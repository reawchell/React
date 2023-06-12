import PostContextProvider from "../contexts/post.context";
import ListaPostsComponentes from "../componentes/lista-posts/ListaPosts.componentes";
import "./Posts.page.scss";
import "tailwindcss/tailwind.css";

export default function PostsPage(){
    return(
    <div className="tester">
        <h1 className="tester_centro">POSTS</h1>
        <PostContextProvider>
            <ListaPostsComponentes></ListaPostsComponentes>
        </PostContextProvider>
    </div>
    )
}