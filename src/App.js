import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Header />
      <header></header>
      <div>Photo</div>
      <img src="https://i.ibb.co/dtRQBkB/italy.jpg" alt=""></img>
      <img src="https://i.ibb.co/2WXXkht/fuji.jpg" alt=""></img>
      <img src="https://i.ibb.co/yNwzq5q/yokohama.jpg" alt=""></img>
      <Footer />
    </div>
  );
}

export default App;
