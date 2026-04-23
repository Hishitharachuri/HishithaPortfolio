import nodejs from "../assets/NodeJs.png";
import reactsrc from "../assets/react.svg";
import ts from "../assets/Typescript.png";
import js from "../assets/Javascript.png";
import nest from "../assets/nestJs.png";
import sql from "../assets/Sql.png";
import python from "../assets/Python.png";

const skillGroups = [
    {
        category: "Frontend",
        items: [
            { src: reactsrc, alt: "React", level: "Advanced · 3+ yrs" },
            { src: ts, alt: "TypeScript", level: "Advanced · 2+ yrs" },
            { src: js, alt: "JavaScript", level: "Advanced · 3+ yrs" },
        ],
    },
    {
        category: "Backend",
        items: [
            { src: nodejs, alt: "Node.js", level: "Advanced · 3+ yrs" },
            { src: nest, alt: "NestJS", level: "Advanced · 2+ yrs" },
            { src: python, alt: "Python", level: "Intermediate · 1+ yr" },
        ],
    },
    {
        category: "Database",
        items: [
            { src: sql, alt: "SQL", level: "Advanced · 3+ yrs" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <h1>Skills & Tech Stack</h1>
                <p className="section-subtitle">
                    Tools and technologies I use daily to ship production-grade software.
                </p>

                {skillGroups.map((group) => (
                    <div className="skill-group" key={group.category}>
                        <h2 className="skill-category">{group.category}</h2>
                        <div className="skills-grid">
                            {group.items.map((skill) => (
                                <div className="skill-card" key={skill.alt}>
                                    <img src={skill.src} alt={skill.alt} />
                                    <p className="skill-name">{skill.alt}</p>
                                    <p className="skill-level">{skill.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}