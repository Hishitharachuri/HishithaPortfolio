const projects = [
  {
    title: "Smart Airports Platform",
    role: "Full Stack Developer",
    duration: "Jan 2024 – Present",
    description:
      "A real-time monitoring platform for airport operations, tracking passenger flow, baggage handling, and gate utilization across 3 terminals.",
    impact: [
      "Processed 20K+ IoT events per day with sub-200ms latency",
      "Reduced manual reporting time by 65% via automated dashboards",
      "Built 12 reusable React components adopted across 2 other teams",
    ],
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Azure", "Redis"],
  },
  {
    title: "Workforce Architecture Tool",
    role: "Frontend Lead + Backend Contributor",
    duration: "Jun 2023 – Dec 2023",
    description:
      "An internal workforce planning tool helping HR map 500+ employees to roles, skills, and capacity forecasts.",
    impact: [
      "Cut workforce planning cycle from 2 weeks to 3 days",
      "Optimized SQL queries — reduced report generation from 2.1s to 380ms",
      "Integrated Azure AD SSO for seamless authentication",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "SQL Server", "Azure AD"],
  },
  {
    title: "Internal API Gateway",
    role: "Backend Developer",
    duration: "2022 – 2023",
    description:
      "Centralized API gateway consolidating 8 legacy services into a unified NestJS layer with standardized auth, logging, and rate-limiting.",
    impact: [
      "Unified 8 services → single gateway, reducing integration bugs by 70%",
      "Implemented JWT auth + role-based access for 500+ users",
      "Added Swagger docs — cut onboarding time for new devs by 50%",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Swagger"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h1>Featured Projects</h1>
        <p className="section-subtitle">
          A selection of production systems I've designed, built, and shipped.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-header">
                <h2>{p.title}</h2>
                <span className="project-duration">{p.duration}</span>
              </div>
              <p className="project-role">{p.role}</p>
              <p className="project-desc">{p.description}</p>

              <ul className="project-impact">
                {p.impact.map((i) => (
                  <li key={i}>✅ {i}</li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tech-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}