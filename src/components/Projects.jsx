import image from "../assets/project.png"
export default function Project() {
    return (
        <section className="section-container">
            <h1>Projects</h1>
                <div className="project-content">
                <h2 className="heading">Smart airports</h2>

                <p className="project-summary">
                    A full-stack Airport-in-a-Box platform that centralizes all operational information of an airport into a single system.
                    The platform tracks flights and airlines for a specific airport, providing passengers and staff with real-time information — including assigned belt, gate, and runway details per flight, along with flight delay updates and departmental information. Access to information is controlled through Role-Based Access Control, ensuring each user views only what is relevant to their role.

                    Key Highlights:
                    Flight and airline tracking with real-time status, delay updates, and assigned gate, belt, and runway information
                    Baggage belt assignments linked directly to flight data for seamless passenger guidance
                    Runway and gate scheduling with live status visibility
                    Departmental information management across airport operations
                    RBAC ensuring role-specific data access across all user types
                </p>

                <h2 className="heading">Workforce Architecture</h2>

                <p className="project-summary">
                    Designed and implemented a scalable enterprise platform to streamline HR operations during acquisitions and mergers. The solution managed the full employee lifecycle, automated HR documentation, tracked financial metrics, and enforced role-based access controls. Key contributions included:

                    Reusable React Component Library: Built 20+ standardized components for HR workflows, cutting UI development time for new features by 40%.

                    Global State Management: Implemented React Context API for session handling, role-based UI rendering, and real-time employee data across 500+ records, reducing re-render overhead by 45%.

                    Lifecycle APIs: Developed 12+ Express.js APIs covering onboarding, offboarding, transfers, and organizational restructuring, supporting transitions for entities with 1,000+ employees.

                    Automated Document Generation: Enabled dynamic creation of offer and resignation letters, improving HR efficiency and compliance.

                    This project highlights expertise in scalable front-end architecture, API design, and automation for enterprise HR systems, directly contributing to faster corporate transitions and improved operational efficiency.
                </p>
            </div>
        </section>
    )
}