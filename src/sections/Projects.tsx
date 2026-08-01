function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div>
                <h3>CLI Task Scheduler</h3>
                <a
                    href="https://github.com/dnafolayan/cli-task-scheduler"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>
                <p>
                    A lightweight, Python-based task scheduler that runs
                    commands on a defined schedule, logs results, and handles
                    both success and error outputs.
                </p>

                <p>Technologies: Python, argparse, subprocess</p>
            </div>

            <div>
                <h3>File Organizer</h3>
                <a
                    href="https://github.com/dnafolayan/file-organizer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>
                <p>
                    A Python script designed to help you organize files in a
                    folder based on their extensions
                </p>
                <p>Technologies: Python, os, pathlib</p>
            </div>

            <div>
                <h3>Notes API</h3>
                <a
                    href="https://github.com/dnafolayan/notes-api"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>
                <p>
                    A REST API built with Go for managing notes with database
                    integration.
                </p>

                <p>Technologies: Go, Gin, SQLite, REST API</p>
            </div>

            <div>
                <h3>RealTimePulse</h3>
                <a
                    href="https://github.com/dnafolayan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>
                <p>
                    A real-time alerting system exploring concurrency patterns
                    and scalable backend architecture.
                </p>

                <p>Technologies: Go, Goroutines, Channels</p>
            </div>
        </section>
    );
}

export default Projects;
