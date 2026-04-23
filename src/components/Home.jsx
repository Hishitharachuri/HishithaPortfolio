import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";
import workImage from "../assets/work_3.png";

export default function Home() {
    const [text] = useTypewriter({
        words: [
            "Full Stack Developer",
            "React & Node.js Engineer",
            "API Architect",
            "Cloud Enthusiast",
        ],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <section id="home" className="hero-section">
            <div className="section-container hero-content">
                {/* LEFT SIDE: TEXT */}
                <div className="hero-text">
                    <h1 className="hero-greeting">Hi, I'm Hishitha 👋</h1>

                    <h2 className="hero-title">
                        I am <span className="typing">{text}</span>
                        <Cursor cursorColor="#0284c7" />
                    </h2>

                    <p className="hero-description">
                        Full Stack Developer with <strong>3+ years</strong> of experience
                        designing and shipping scalable web applications. I've delivered
                        <strong> 15+ production features</strong>, optimized APIs to handle
                        <strong> 10K+ daily requests</strong>, and reduced frontend load
                        times by up to <strong>40%</strong> through performance tuning.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="hero-button">View Portfolio</a>
                        <a href="/resume.pdf" className="hero-button outline" download>
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE: IMAGE */}
                <img
                    className="work-image"
                    src={workImage}
                    alt="Hishitha Rachuri - Full Stack Developer"
                />
            </div>
        </section>
    );
}