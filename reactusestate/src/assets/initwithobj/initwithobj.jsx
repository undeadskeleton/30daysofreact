import { useState, useEffect } from "react";

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  return (
    <article>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </article>
  );
}

// when using fetch to get anything from api if the useEffect run after the render so places which try  to acess the fetch object data will cause issue solution is to add conditional like this if data exist then render
