import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Data fra serveren er ikke tilgængelig");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1200);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Blogindlæg indlæses...</div>}
      {blogs && <BlogList blogs={blogs} title="Alle blogindlæg" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
