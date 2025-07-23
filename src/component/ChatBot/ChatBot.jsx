import Headers from "../Header/Header";
import "./ChatBot.css";

const ChatBot = () => {
  return (
    <main>
      <Headers />
      <main class="chatbot-wrapper">
        <h1>Hi User,</h1>
        <div>It's a Kapil-bot, ask me anything about me!</div>
        <section class="chatbot-container">
          <section class="question-container">Tell me about yourself</section>

          <section class="response-container">
            Sure! I'm Kapil Katkar Senior React Develeoper with 4 years of
            Experience and who is exploring on gen Ai developement...
          </section>

          <section class="input-container">
            <input type="text" />
          </section>
        </section>
        <small class="disclaimer">
          This is a personal AI bot for informational purposes only. Responses
          may not always be accurate or up to date.
        </small>
      </main>
    </main>
  );
};

export default ChatBot;
