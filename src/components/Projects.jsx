import image from "../assets/project.png";

export default function Project() {
  return (
    <section className="section-container">

      <div className="project-content">
        <h1>Projects</h1>
        {/* Smart Airports */}
        <div className="project-card">
          <h2 className="heading underline">Smart Airports</h2>
          <p className="project-summary">
            A full-stack Airport-in-a-Box platform that centralizes all operational
            information of an airport into a single system. It provides passengers
            and staff with real-time updates on flights, gates, belts, and runways,
            while ensuring secure access through Role-Based Access Control (RBAC).
          </p>
          <ul className="project-highlights">
            <li>Flight and airline tracking with real-time status and delay updates</li>
            <li>Baggage belt assignments linked directly to flight data</li>
            <li>Runway and gate scheduling with live visibility</li>
            <li>Departmental information management across airport operations</li>
            <li>RBAC ensuring role-specific data access</li>
          </ul>
        </div>

        {/* Workforce Architecture */}
        <div className="project-card">
          <h2 className="heading underline">Workforce Architecture</h2>
          <p className="project-summary">
            Designed and implemented a scalable enterprise platform to streamline HR
            operations during acquisitions and mergers. The solution managed the full
            employee lifecycle, automated documentation, tracked financial metrics,
            and enforced role-based access controls.
          </p>
          <ul className="project-highlights">
            <li>Reusable React Component Library: 20+ standardized components, reducing UI dev time by 40%</li>
            <li>Global State Management: Context API for sessions and role-based rendering, cutting re-render overhead by 45%</li>
            <li>Lifecycle APIs: 12+ Express.js APIs for onboarding, offboarding, transfers, and restructuring</li>
            <li>Automated Document Generation: Dynamic offer and resignation letters for efficiency and compliance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
