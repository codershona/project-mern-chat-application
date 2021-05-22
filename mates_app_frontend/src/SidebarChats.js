import React from 'react'
import './SidebarChats.css'
import { Avatar } from '@material-ui/core'

function SidebarChats() {
    return (
        <div className="sidebarChatLists">
          <Avatar />
          <div className="sidebarChatLists_info">
              <h2>BroadCasts Chat Room</h2>
              <p>Last Chats</p>
              </div>
        </div>
    );
}

export default SidebarChats
