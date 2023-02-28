import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-2 border border-black w-full h-[521px] ml-2 bg-slate-100 rounded-lg">
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
      <ChatMessage name="Abhishek Ranjan" message="Nice Live Streaming" />
    </div>
  );
};

export default LiveChat;
