import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      setPost(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {post.length > 0 && (
        <ul>
          {post.map(postdata => (
            <li key={postdata.id}><h3>{postdata.title}</h3><p>{postdata.body}</p></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
