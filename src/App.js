import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [postFlag, setPostFlag] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/posts");
      const parse = await data.json();
      setPosts(parse);
    }
    fetchData();
  }, [postFlag]);

  return (
    <div className="App">
      <Header />
      {posts.map((item) => {
        return <Post photo={item} key={item.id} />
      })}
      <Footer postFlag={postFlag} setPostFlag={setPostFlag}/>
    </div>
  );
}

export default App;
