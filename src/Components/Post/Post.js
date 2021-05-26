import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title,body} = props.post;
    const history = useHistory();

    const showComments=(id)=>{
        history.push(`/post/${id}`)

    }

    return (
        <div style={{border:'1px solid'}}>
            <h3>post id no : {id}</h3>
            <h4>post title : {title}</h4>
            <h4>post body : {body}</h4>
            <button onClick= {()=>showComments(id)}>show comments</button>
        </div>
    );
};

export default Post;