import { Link } from "react-router-dom";
import "./Post.componentes.scss";
import "tailwindcss/tailwind.css";

export default function PostComponentes({ post }) {
  return (
    <div className="post">
      <h2>
        <Link to="/post">
          {post.id}.{post.titulo}
        </Link>
      </h2>

      <p>{post.estilo}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <img 
          src={post.imagen}
          className="cover"
          alt="Imagen"
        />
       
      </div>
    </div>
  );
}