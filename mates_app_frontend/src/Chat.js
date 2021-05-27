import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import axios from "./axios";


function Chat({ messages }) {

   const [input, setInput] = useState("");

   const sendMessage = async (e) => {
      e.preventDefault();

      await axios.post('/messages/new', {
            message: input,
            name: "CoderGirls",
            timestamp: "JUST NOW!",
            received: false,
      });

      setInput("");

   };

    return (
        <div className="chat">
            <div className="chat_Headers">
            <Avatar src="data:image/png;base64,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" />
            <div className="chat_HeadersInfo">
                <h3>Queen Jennifer</h3>
                <h6>Contact Name</h6>
                <p> tap here for contact info.... </p>
            </div>
            <div className="chat_HeadersRight">
                <IconButton>
                   <YoutubeSearchedForIcon />
                </IconButton>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
                <IconButton>
                  <AttachmentIcon />
                </IconButton>
            </div>
            </div>

            <div className="chat_Body">
               {messages.map(message => (
            <p className={`chat_PeopleMessages ${message.received && "chat_PeopleChatReceiver"}`}>
            <span className="chat_peopleNames">
                {message.name}
                </span>
                  {message.message}
             <span className="chat_Timestamps">
                {message.timestamp}
                </span>
             </p>
         ))}
            </div>

            <div className="chat_Footer">
             <EmojiEmotionsIcon />
             <form>
                 <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                    type="text"
                />
                <button
                onClick={sendMessage}
                type="submit">
                    Send your messages
                </button>
             </form>
             <SettingsVoiceIcon />
            </div>
        </div>
    );
}

export default Chat;
