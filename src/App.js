import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState("place");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("/posts");
      const parse = await data.json();
      setPosts(JSON.stringify(parse));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header></header>
      <div>Photo</div>
      <img src="https://i.ibb.co/dtRQBkB/italy.jpg" alt=""></img>
    </div>
  );
}

export default App;
