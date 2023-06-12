import { useContext, useState } from 'react'
// import "/src/componentes/FooterComponentes.scss";
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home.Page'
import LoginPage from './pages/Login.page'
import PostsPage from './pages/Posts.page'
import PostNuevoPage from './pages/PostNuevo.page'
import NavigateBarComponentes from './componentes/navigation-bar/NavigateBarComponentes';
import UsersPage from './pages/Users.page';
import SignupPage from './pages/Signup.page';
import AreaUserPage from './pages/AreaUser.page';
import CerrarSesionPage from './pages/CerrarSesion.page';
import { PostContext } from './contexts/post.context';
import PostPage from './pages/Post.page';
import FooterComponentes from './componentes/footer-componentes/footerComponentes'
import "tailwindcss/tailwind.css";


function App() {

  const {usuario} = useContext(PostContext)


  return (
    <div className='app'>
     <NavigateBarComponentes></NavigateBarComponentes>
     <Routes>
      <Route path='/posts' element={<PostsPage></PostsPage>}></Route>
      <Route path='/posts/nuevo' element={usuario?<PostNuevoPage></PostNuevoPage>:<Navigate to="/" replace></Navigate>}></Route>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/login' element={usuario?<Navigate to="/users-page" replace></Navigate>:<LoginPage></LoginPage>}></Route>
      <Route path='/users' element={<UsersPage></UsersPage>}></Route>
      <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
      <Route path='/area-user' element={usuario?<AreaUserPage></AreaUserPage>:<Navigate to="/login" replace></Navigate>}></Route>
      <Route path='/logout' element={<CerrarSesionPage></CerrarSesionPage>}></Route>
      <Route path='/posts/:id' element={<PostPage></PostPage>}></Route>
      <Route path='/footerComponentes' element={<FooterComponentes></FooterComponentes>}></Route>
     </Routes>

     {/* <footer className='footer'>
      <p className='test'>FOOTER</p>
     </footer> */}
     </div>
    
  )
}

export default App
