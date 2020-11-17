import React, { useState } from 'react'
import './ChatInput.css'
import {Button} from '@material-ui/core'

import db from './firebase'
import firebase from 'firebase'
import {useStateValue} from './StateProvider'


function ChatInput({chanId, channelName}) {
    const[input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if(!chanId){
            return false;
        }

        db.collection('channels').doc(chanId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        setInput("");
    };

    return (
        <div className="chatInput">
                <form>
                    <input
                    placeholder={`Message #${channelName.toLowerCase()}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    />
                    <Button hidden type="submit" onClick={sendMessage} >SEND</Button>
                </form>
        </div>
    );
}

export default ChatInput
