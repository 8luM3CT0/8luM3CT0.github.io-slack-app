import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined'
import db from './firebase'
import Message from './Message'
import ChatInput from './ChatInput'

function Chat() {
    const {chanId} = useParams();
    const [channelDetails, setChannelDetails] = useState(null);
    const [roomMessages, setRoomMessages]  = useState([]);

    useEffect(() => {
        if (chanId) {
            db.collection("channels")
              .doc(chanId)
              .onSnapshot((snapshot) => {
                setChannelDetails(snapshot.data());
              });
      
              db.collection('channels').doc(chanId)
              .collection('messages')
              .orderBy('timestamp', 'asc')
              .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data()))
              )
        }
    }, [chanId])

    console.log(channelDetails);
    console.log("MESSAGES >>>", roomMessages)
    
    return (
        <div className="chat">
            {channelDetails && roomMessages && (
                <>
                <div className="chat__header">
                    <div className="header__left">
                        <h4 className="channel__name">
            <strong># {channelDetails.name}</strong>
                            <StarBorderOutlinedIcon />
                        </h4>
                    </div>

                    <div className="header__right">
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </div>
                </div>
                <div className="chat__messages">
                  {roomMessages.map(({ message, timestamp, user, userImage }) => (
                  <Message
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                    ))}
                </div>

                <ChatInput channelName={channelDetails.name} chanId={chanId} />
        </>
        )}
        </div>
    );
}

export default Chat
