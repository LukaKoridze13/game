import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = useRef<DefaultEventsMap, DefaultEventsMap, null>(null);
  useEffect(() => {
    socket.current = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("connected to server", socket.id);
    });

    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });

    socket.on("disconnect", () => {
      console.log("disconnected from server");
    });

    // receive a message from the server
    socket.on("chat message", (...args) => {
      console.log(args);
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          // send a message to the server
          socket.emit("chat message", "Hello, server!");
        }}></button>
    </>
  );
}

export default App;
