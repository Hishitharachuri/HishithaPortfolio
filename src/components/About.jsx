export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="section-container about-content">
                <h1>About Me</h1>

                <p>
                    I'm <strong>Hishitha Rachuri</strong>, a Full Stack Developer based in
                    India with <strong>3+ years of professional experience</strong> at
                    PwC, building enterprise-grade applications used by
                    <strong> 500+ internal users</strong> across multiple business units.
                </p>

                <p>
                    My core expertise lies in the <strong>React + NestJS + PostgreSQL</strong>
                    stack. I've architected and shipped <strong>6 major modules</strong>
                    in production — including a workforce analytics dashboard that
                    reduced manual reporting effort by <strong>~60%</strong>, and a
                    smart-airport monitoring tool processing <strong>20K+ events/day</strong>.
                </p>

                <p>
                    On the backend, I design <strong>RESTful APIs</strong>, write
                    optimized SQL queries (cut average query time from 2.1s → 380ms on
                    one project), and integrate third-party services like Azure AD,
                    SendGrid, and payment gateways. On the frontend, I focus on
                    <strong> responsive, accessible UIs</strong> with React, TypeScript,
                    and modern CSS — consistently achieving Lighthouse scores of
                    <strong> 90+</strong>.
                </p>

                <p>
                    Beyond code, I collaborate closely with product managers and
                    designers in Agile teams, mentor <strong>2 junior developers</strong>,
                    and regularly contribute to code reviews and internal tech talks.
                </p>

                {/* Highlights Grid */}
                <div className="about-highlights">
                    <div className="highlight-card">
                        <h3>🚀 Performance</h3>
                        <p>Reduced page load time by 40% via code-splitting & lazy loading.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>🧩 Architecture</h3>
                        <p>Designed modular NestJS microservices serving 10K+ requests/day.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>🤝 Collaboration</h3>
                        <p>Shipped 15+ features in Agile sprints with 0 critical rollbacks.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}