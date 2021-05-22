import React from 'react'
import './SidebarChats.css'
import { Avatar } from '@material-ui/core'

function SidebarChats() {
    return (
        <div className="sidebar_ChatLists">
          <Avatar />
          <div className="sidebarChats_info">
              <h2>ChatRoom Name</h2>
              <p>Last Chats</p>
          </div>
        </div>
    );
}

export default SidebarChats
