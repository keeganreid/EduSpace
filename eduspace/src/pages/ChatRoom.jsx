import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../contexts/chatRooms';
import { MessageInput } from '../components/MessageInput';
import { MessageList } from '../components/MessageList';
import '../styles/Styles.css';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        // TODO: 404
    }

    return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
            <div className="messages-container">
                <MessageList roomId={room.id} />
                <MessageInput roomId={room.id} />
            </div>
        </>
    );
}

export { ChatRoom };