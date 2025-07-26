import React, { useState, useEffect, useRef } from "react";
import Headers from "../Header/Header";
import { FaMicrophone, FaArrowRight } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import "./ChatBot.css";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [currentQA, setCurrentQA] = useState(null);
  const [loading, setLoading] = useState(false);
  const historyRef = useRef(null);

  const callRag = async (questionText) => {
    setLoading(true);
    const apiUrl = "https://rag-solution.onrender.com/rag-v1";
    const headers = {
      "Content-Type": "application/json",
    };
    const payload = { question: questionText };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setCurrentQA({
        question: questionText,
        answer: data.answer || "No answer received.",
        sources: data.sources || [],
      });
    } catch (err) {
      console.error("Fetch error:", err);
      setCurrentQA({
        question: questionText,
        answer: "Sorry, something went wrong.",
        sources: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (currentQA) {
      setChatHistory((prev) => [currentQA, ...prev]);
    }
    setCurrentQA({
      question: input,
      answer: "Thanks for waiting...",
      sources: [],
    });

    callRag(input);
    setInput("");
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [chatHistory, currentQA]);

  return (
    <main>
      <Headers />
      <main className="chatbot-wrapper">
        <h1>Hi User,</h1>
        <div>It's a Kapil-bot, ask me anything about me!</div>

        <section className="chatbot-container">
          <section
            ref={historyRef}
            className={`chat-history ${chatHistory.length > 0 ? "show" : ""}`}
          >
            {chatHistory.map((chat, idx) => (
              <div className="chat-pair" key={idx}>
                <section className="question-container old-question">
                  {chat.question}
                </section>
                <section className="response-container old-response">
                  {chat.answer}
                  {chat.sources.length > 0 && (
                    <ul className="sources">
                      {chat.sources.map((src, i) => (
                        <li key={i}>{src}</li>
                      ))}
                    </ul>
                  )}
                </section>
              </div>
            ))}
          </section>

          {currentQA && (
            <div className="chat-pair current-chat">
              <section className="question-container current-question">
                {currentQA.question}
              </section>
              <section className="response-container current-response">
                {loading ? "Thanks for waiting..." : currentQA.answer}
                {!loading && currentQA.sources.length > 0 && (
                  <ul className="sources">
                    {currentQA.sources.map((src, idx) => (
                      <li key={idx}>{src}</li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          )}
        </section>

        <form className="input-container" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              required
              autoComplete="off"
            />
            <button type="submit" className="send-btn" disabled={loading}>
              <FaArrowRight />
            </button>
            <FaMicrophone />
          </div>

          <small className="disclaimer">
            <CiWarning />
            This is a personal AI bot for informational purposes only. Responses
            may not always be accurate or up to date.
          </small>
        </form>
      </main>
    </main>
  );
};

export default ChatBot;
