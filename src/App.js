import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/posts");
      const parse = await data.json();
      console.log(parse)
      // setPosts(JSON.stringify(parse));
      setPosts(parse);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="headBlock"></div>
      {posts.map((item) => {
        return <Post photo={item} key={item.id} />
      })}
      <div className="footBlock"></div>
      <Footer />
    </div>
  );
}

export default App;
