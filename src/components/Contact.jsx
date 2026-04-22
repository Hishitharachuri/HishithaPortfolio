import "../App.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import Resume from "../assets/Resume.png"

const contact = [
    { src: github, alt: "GitHub", link: "https://github.com/Hishitharachuri" },
    { src: linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/hishitha-rachuri-3b3316231/" },
    { src: mail, alt: "Email", link: "mailto:hishitharachuri@gmail.com" },
    { src: Resume, alt: "Resume", link: "public/Hishitha's_resume (2).pdf" }
];

export default function Contact() {
    return (
        <section className="section-container contact-section">
            <h1>Contact</h1>
            <p>Submit the contact form to get in touch!</p>
            <div className="contact-form">
                <div className="input-row">
                    <input placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                </div>

                <textarea placeholder="Your message"></textarea>
                <a href="mailto:yourname@example.com" class="talk-button">Let’s Talk</a>
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