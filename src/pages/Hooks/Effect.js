import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Effect() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState("")
    const fetchData = () => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                userId: userId || undefined,
            },
        })
        .then((reponse) => {
            setPosts(reponse.data)
        })
        .catch((error)=>{
            console.log(error);
        })

    };
    // useEffect( () => {
    //     console.log("Effect run");
    //     fetchData()
    //     return () => {
    //         console.log("Cleanup effect run");
    //     }
    // }, []);
    useEffect( () => {
        console.log("Effect run");
        fetchData()
        
        return () => {
            console.log("Cleanup effect run");
        }
    }, [userId]);

    console.log("Render run");

    return (
    <div className='container'>
        < Link to="/hooks-state">State</Link>
        <h1>Post</h1>
        <select onChange={(evt) => setUserId(evt.target.value)}>
            <option value="">Select User</option>
            <option value={1}>User 1</option>
            <option value={2}>User 2</option>
            <option value={3}>User 3</option>
            <option value={4}>User 4</option>
        </select>
        <ul>
            {posts.map((post)=>{
                return <li key={post.id}> {post.title} </li>
            })}
        </ul>    
    </div>
    )
  
}

export default Effect