import { useState, useEffect, ChangeEvent } from "react";

interface Connection {
  connect: () => void;
  disconnect: () => void;
}

interface ChatRoomProps {
  roomId: string;
}

const createConnection = (serverUrl: string, roomId: string): Connection => {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(`✅ Connecting to "${roomId}" room at ${serverUrl}...`);
    },
    disconnect() {
      console.log(`❌ Disconnected from "${roomId}" room at ${serverUrl}`);
    },
  };
};

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const [serverUrl, setServerUrl] = useState<string>("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  const handleServerUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setServerUrl(e.target.value);
  };

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={handleServerUrlChange} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
};

export const ChatRoomManager = () => {
  const [roomId, setRoomId] = useState<string>("general");
  const [show, setShow] = useState<boolean>(false);

  const handleRoomIdChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoomId(e.target.value);
  };

  const toggleChatRoom = () => {
    setShow(!show);
  };

  return (
    <>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={handleRoomIdChange}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={toggleChatRoom}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
};
