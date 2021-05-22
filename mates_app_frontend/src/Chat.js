import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_Headers">
            <Avatar />
            <div className="chat_HeadersInfo">
                <h3>Contact Name</h3>
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
              <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>

                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>

                  <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>
                  <p className="chat_PeopleMessages chat_PeopleChatReceiver">
                 <span className="chat_peopleNames">
                     James BOND
                     </span>


                  Please check my messages...

                  <span className="chat_Timestamps">
                     {new Date().toUTCString()}
                     </span>
                  </p>

            </div>

            <div className="chat_Footer">
             <EmojiEmotionsIcon />
             <form>
                 <input
                    // value={input}
                    // onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                    type="text"
                />
                <button
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
