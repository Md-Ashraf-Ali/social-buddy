import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data =>setPost(data));
    },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[])
    return (
        <div>
            <h1>This is postDetail id;{id}</h1>
            <h5>user posted id {post.id}</h5>
            <p>post title: {post.title}</p>
            <p>post body : {post.body}</p>
            <p>number of comments : {comments.length}</p>
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;