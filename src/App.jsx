import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css'
import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            autor="Denys Rógeres"
            conteudo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit veniam neque recusandae facere dignissimos ut perspiciatis eligendi ex facilis, dolorum nulla voluptate expedita. Vitae unde consequuntur reprehenderit iusto expedita atque!"
          />
        </main>
      </div>
    </>
  )
}

export default App
