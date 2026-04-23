import "../App.css";
import github from "../assets/github.png";
import linkedin from "../assets/LinkedIn.png";
import mail from "../assets/mail.png";

const contact = [
    { src: github, alt: "GitHub", link: "https://github.com/Hishitharachuri" },
    { src: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/hishitha-rachuri-3b3316231/" },
    { src: mail, alt: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=hishithrachuri@gmail.com" },
];

export default function Contact() {
    return (
        <section id="contact" className="section-container contact-section">
            <h1>Let's Build Something Together</h1>
            <p className="section-subtitle">
                I'm open to full-time roles and collaborations.
                I typically reply within <strong>24 hours</strong>.
            </p>

            <div className="contact-form">
                <div className="input-row">
                    <input placeholder="Your name" />
                    <input type="email" placeholder="Your email" />
                </div>
                <input placeholder="Subject (e.g., Job Opportunity, Project Inquiry)" />
                <textarea placeholder="Tell me about your project or role..."></textarea>
                <button className="talk-button">Send Message →</button>
            </div>

            <div className="contact-icons">
                {contact.map((item) => (
                    <a href={item.link} key={item.alt} target="_blank" rel="noreferrer">
                        <img src={item.src} alt={item.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
}