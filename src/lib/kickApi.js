export const connectToKickChat = (channel) => {
  const ws = new WebSocket(`wss://chat.kick.com/${channel}`);
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log("Chat message:", data);
  };
  return ws;
};
