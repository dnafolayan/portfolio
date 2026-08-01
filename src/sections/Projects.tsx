import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <ProjectCard
                title="CLI Task Scheduler"
                description="A lightweight, Python-based task scheduler that runs commands on a defined schedule, logs results, and handles both success and error outputs."
                technologies={["Python", "argparse", "subprocess"]}
                link="https://github.com/dnafolayan/cli-task-scheduler"
            />

            <ProjectCard
                title="File Organizer"
                description="A Python script designed to help you organize files in a folder based on their extensions."
                technologies={["Python", "os", "pathlib"]}
                link="https://github.com/dnafolayan/file-organizer"
            />

            <ProjectCard
                title="Notes API"
                description="A REST API built with Go for managing notes with database integration."
                technologies={["Go", "Gin", "SQLite", "REST API"]}
                link="https://github.com/dnafolayan/notes-api"
            />

            <ProjectCard
                title="RealTimePulse"
                description="A real-time alerting system exploring concurrency patterns and scalable backend architecture."
                technologies={["Go", "Goroutines", "Channels"]}
                link="https://github.com/dnafolayan/realtimepulse"
            />
        </section>
    );
}

export default Projects;
