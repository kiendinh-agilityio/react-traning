// import { useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Avatar,
  Gallery,
  Button,
  List,
  TeaSet,
  Toolbar,
  Signup,
  PackingList,
  GalleryState,
  TodoList,
  AdvancedCounter,
} from "./components/index";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Button label="Click me" />
      <Toolbar />
      <TeaSet />
      <Signup />
      <div>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </div>
      <TodoList />
      <AdvancedCounter />
      <GalleryState />
      <PackingList />
      <Gallery />
      <div>
        <h2>Scientists List</h2>
        <List />
      </div>
    </>
  );
};

export default App;
