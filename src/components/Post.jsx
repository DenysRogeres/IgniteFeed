import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(['Muito bom']);
    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleAddCommnet() {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    }

    function handleNewComment() {
        setNewComment(event.target.value);
    }

    return (
        <article className={styles.post}>
           <header>
               <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
               </div>

               <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
           </header>

           <div className={styles.content}>
                {content.map(item => {
                    if(item.type ==  'paragraph') 
                        return <p key={item.content}>{item.content}</p>

                    else if(item.type == 'link') 
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                })}
           </div>

           <form onSubmit={handleAddCommnet} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newComment}
                    onChange={handleNewComment}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
           </form>

           <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment}/>
                })}
           </div>
        </article>
    )
}