//import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Blogindlæg indlæses...</div>}
      {blogs && <BlogList blogs={blogs} title="Alle blogindlæg" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
