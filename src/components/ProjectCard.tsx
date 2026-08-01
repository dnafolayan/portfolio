function ProjectCard({
    title,
    description,
    technologies,
    link,
}: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}) {
    return (
        <article>
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
            <p>{description}</p>
            <p>Technologies: {technologies.join(", ")}</p>
        </article>
    );
}

export default ProjectCard;
