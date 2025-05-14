import { useEffect } from "react";
import { connectToKickChat } from "../lib/kickApi";

export const useKickChat = (channel, onMessage) => {
  useEffect(() => {
    const ws = connectToKickChat(channel);
    ws.onmessage = (event) => onMessage(JSON.parse(event.data));
    return () => ws.close();
  }, [channel, onMessage]);
};
