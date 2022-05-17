import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log("useEffect kørte");
    fetch("http://localhost:8000/blogs").then((res) => {
      return res.json().then((data) => {
        console.log(data);
        setBlogs(data);
      });
    });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="Alle blogindlæg"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
