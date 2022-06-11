
import { PencilLine } from 'phosphor-react';
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=50"/>
        

            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/DenysRogeres.png" alt="Foto de perfil" />

                <strong>Denys Rógeres</strong>
                <span>Engenheiro de Software</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        
    )
}