import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Chatroom() {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [message, setMessage] = useState('');
    const [chatData, setChatData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from submitting the traditional way
        try {
            const res = await fetch(`/api/user/api/chatroom/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }), // Send message as an object
            });
            const data = await res.json();
            setChatData(data.data)
            console.log(data)
        } catch (error) {
            console.log("Error occurred while sending the message:", error);
        }
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Chatroom</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Chat Messages</h3>
                        {chatData && chatData.length > 0 ? (
                            chatData.map((item, index) => (
                                <div key={index} className={`my-4 flex ${item.userId === currentUser._id ? 'justify-end' : ''}`}>
                                    <div className={`flex items-start ${item.userId === currentUser._id ? 'flex-row-reverse' : ''}`}>
                                        <div className="flex-shrink-0">
                                            {item.photo && <img src={item.photo} alt={`${item.name}'s profile`} className="w-10 h-10 rounded-full" />}
                                        </div>
                                        <div className={`ml-2 ${item.userId === currentUser._id ? 'text-right' : 'text-left'}`}>
                                            <p className="text-lg text-[#FFA500]">{item.name}</p>
                                            <p className="text-xs text-gray-500">{formatDate(item.createdAt)}</p>
                                            <div className={`mt-1 p-2 bg-[#FFEDCC] rounded-lg ${item.id === currentUser._id ? 'ml-auto' : ''}`}>
                                                <p>{item.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No messages to display.</p>
                        )}
                    </div>
                </>
            )}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex items-center bg-yellow-400 dark:bg-zinc-800 p-2 rounded-lg">
                    
                       <input
                            type="text"
                        className="border rounded-lg px-4 py-2 w-full mr-2"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                        <button type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            <img aria-hidden="true" alt="send" src="https://placehold.co/20?text=%E2%86%92" />
                        </button>
                    

                </div>
            </form>
        </div>
    );
}
