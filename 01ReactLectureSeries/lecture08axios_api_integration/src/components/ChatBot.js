import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_KEY = "AIzaSyCvLt5XArm38KfEUEbNn--Oed_PPb77P7E"; 

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const reply = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setMessages([newMessages, { text: reply, sender: "bot" }]);
    } catch (error) {
      console.error("API error:", error);
      setMessages([newMessages, { text: "Something went wrong.", sender: "bot" }]);
    }
  };

  return (
    <div style={styles.container}>
      <h2> Gemini ChatBot</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} style={msg.sender === "user" ? styles.userMsg : styles.botMsg}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: 600, margin: "50px auto", textAlign: "center" },
  chatBox: { background: "#eee", height: 400, overflowY: "scroll", padding: 10, borderRadius: 8 },
  inputArea: { display: "flex", marginTop: 10 },
  input: { flex: 1, padding: 10, fontSize: 16 },
  button: { padding: "10px 20px", background: "#007bff", color: "#fff", border: "none" },
  userMsg: { textAlign: "right", background: "#d1e7dd", margin: 5, padding: 8, borderRadius: 6 },
  botMsg: { textAlign: "left", background: "#f8d7da", margin: 5, padding: 8, borderRadius: 6 }
};

export default ChatBot;
