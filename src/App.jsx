import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <Post 
        autor="Denys Rógeres"
        conteudo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit veniam neque recusandae facere dignissimos ut perspiciatis eligendi ex facilis, dolorum nulla voluptate expedita. Vitae unde consequuntur reprehenderit iusto expedita atque!"
      />
    </>
  )
}

export default App
