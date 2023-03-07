import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3000", {
      withCredentials: true,
      extraHeaders: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
    });

    socket.on("connect", () => {
      console.log("connected to server");
    });

    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });

    socket.on("disconnect", () => {
      console.log("disconnected from server");
    });

    // send a message to the server
    socket.emit("chat message", "Hello, server!");
  }, []);

  return <>Div</>;
}

export default App;
