import EditarUserComponentes from "../componentes/editar-user-form/editarUserForm.componentes";
import './AreaUser.page.scss';

export default function AreaUserPage(){
    return(
        <div className="fondo">
        
        <main>
            <EditarUserComponentes></EditarUserComponentes>
        </main>
    </div>
    )
}