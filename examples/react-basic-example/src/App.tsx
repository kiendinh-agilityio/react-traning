// import { useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
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
  MediaControlApp,
  Counter,
  Accordion,
  TaskApp,
  UserForm,
  ChatRoomManager,
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
      <TaskApp />
      <Button label="Click me" />
      <Accordion />
      <Toolbar />
      <ChatRoomManager />
      <TeaSet />
      <Counter />
      <Signup />
      <TodoList />
      <AdvancedCounter />
      <MediaControlApp />
      <UserForm />
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
