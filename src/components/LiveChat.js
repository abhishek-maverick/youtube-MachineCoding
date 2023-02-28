import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomEmoji,
  generateRandomMessages,
  generateRandomName,
} from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(30) + generateRandomEmoji(1),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="p-2 border border-black w-full h-[521px] ml-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChat;
