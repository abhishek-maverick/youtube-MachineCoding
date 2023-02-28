import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomEmoji,
  generateRandomMessages,
  generateRandomName,
} from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
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
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 border border-black w-full h-[521px] ml-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className=" w-full p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-80 border border-black px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="px-2 mx-2 bg-green-100"
          onClick={() => {
            dispatch(
              addMessage({
                name: generateRandomName(),
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
