import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DenysRogeres.png',
      name: 'Denys Rógeres',
      role: 'IT Intern',
    },
    content: [
      { type: 'paragraph', content: 'Eae Galera' },
      { type: 'paragraph', content: 'Turo bom, vamos lá' },
      { type: 'link', content: 'teste.com' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/DenysRogeres.png',
      name: 'Denys Santos',
      role: 'IT Intern',
    },
    content: [
      { type: 'paragraph', content: 'Eae Galera' },
      { type: 'paragraph', content: 'Turo bom, vamos lá' },
      { type: 'link', content: 'teste.com' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post    
                key={post.id}        
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
