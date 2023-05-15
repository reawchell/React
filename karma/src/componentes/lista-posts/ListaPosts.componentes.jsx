import { useContext } from "react";
import PostComponentes from "../post/Post.componentes.jsx";
import { PostContext } from "../../contexts/post.context.jsx";
import "./ListaPosts.componentes.scss";

export default function ListaPostsComponentes() {
  const { posts } = useContext(PostContext);

  return (
    <div className="lista">
      <ul className="grid-container">
        {posts.map((p) => (
          <li key={p.id} className="post-item">
            <PostComponentes post={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}