import nodejs from "../assets/NodeJs.png";
import reactsrc from "../assets/react.svg";
import ts from "../assets/Typescript.png";
import js from "../assets/Javascript.png";
import nest from "../assets/nestJs.png";
import sql from "../assets/Sql.png";
import python from "../assets/Python.png";

const skills = [
    { src: nodejs, alt: "Node.js" },
    { src: reactsrc, alt: "React" },
    { src: ts, alt: "TypeScript" },
    { src: js, alt: "JavaScript" },
    { src: nest, alt: "NestJS" },
    { src: sql, alt: "SQL" },
    { src: python, alt: "Python" },
];

export default function Skills() {
    return (
        <section className="section-container">
            <h1>Skills</h1>
            <div className="section-container">


                <div className="skills-grid skills-section">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.alt}>
                            <img src={skill.src} alt={skill.alt} />
                            <p>{skill.alt}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
}