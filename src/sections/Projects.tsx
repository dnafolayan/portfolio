import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectsdata.json";
import type { Project } from "../types/projects";

function Projects() {
    const projects: Project[] = projectData;
    return (
        <section id="projects">
            <h2>Projects</h2>

            {projects.map(({ id, title, description, technologies, link }) => (
                <ProjectCard
                    key={id}
                    title={title}
                    description={description}
                    technologies={technologies}
                    link={link}
                />
            ))}
        </section>
    );
}

export default Projects;
