import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectsdata.json";
import type { Project } from "../types/projects";

function Projects() {
    const projects: Project[] = projectData;

    return (
        <section id="projects" className="min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="mb-10">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400/80">
                        Selected work
                    </p>
                    <h2 className="text-3xl font-bold font-mono text-cyan-400 md:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-gray-300">
                        A few examples of the systems, tools, and interfaces I
                        enjoy building.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map(
                        ({ id, title, description, technologies, link }) => (
                            <ProjectCard
                                key={id}
                                title={title}
                                description={description}
                                technologies={technologies}
                                link={link}
                            />
                        ),
                    )}
                </div>

                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/dnafolayan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 "
                    >
                        More Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
