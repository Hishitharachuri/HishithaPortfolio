import { useTypewriter } from "react-simple-typewriter";
import "../App.css";
import image from "../assets/work_3.png"

export default function Home() {
    const [text] = useTypewriter({
        words: ["Hishitha Rachuri", "a Full Stack Developer"],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <section className="hero-section">
            <div className=" section-container hero-content">

                {/* LEFT SIDE: TEXT */}
                <div className="hero-text">
                    <h1 className="hero-greeting">Hello!</h1>

                    <h2 className="hero-title">
                        I am <span className="typing">{text}</span>
                    </h2>

                    <p className="hero-description">
                        I have 2+ years of experience building and deploying production‑grade
                        smart contracts and software.
                    </p>

                    <a href="#projects" className="hero-button">
                        View Portfolio
                    </a>
                </div>

                {/* RIGHT SIDE: IMAGE */}
                <img
                    className="work-image"
                    src={image}
                    alt="Working Image"
                />

            </div>
        </section>
    );
}