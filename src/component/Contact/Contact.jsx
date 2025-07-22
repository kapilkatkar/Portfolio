import "./Contact.css";
import Headers from "../Header/Header";

const ContactCard = () => {
  const name = "Kapil Katkar";
  const email = "katkarkapil32@gmail.com";

  return (
    <main>
      <Headers></Headers>
      <section className="contact-card-container">
        <h2>Contact</h2>
        <article className="contact-card">
          <div className="right-side">
            <div className="intro-message">
              <p>
                Hi, I'm <strong>{name}</strong>. Feel free to reach out to me at
                &nbsp;
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ContactCard;
