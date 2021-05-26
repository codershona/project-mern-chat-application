import React, { useEffect } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {

  useEffect(() => {
    const pusher = new Pusher('72ea0bfa631cd8c38fa9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
        </div>
    </div>
  );
}

export default App;
