import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data));
    },[])

    return (
        <div>
            <h1>This is Home Component</h1>
            <h2>Total {posts.length} post</h2>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;