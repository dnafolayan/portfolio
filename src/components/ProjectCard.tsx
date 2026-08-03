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
        <article className="group flex h-full flex-col rounded-2xl border border-cyan-400/20 bg-gray-900/70 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-gray-900">
            <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-cyan-300">
                    Code
                </span>
            </div>

            <p className="mb-5 flex-1 text-sm leading-7 text-gray-300">
                {description}
            </p>

            <ul className="mb-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <li
                        key={technology}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm text-gray-100"
                    >
                        {technology}
                    </li>
                ))}
            </ul>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
                View on GitHub
                <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
}

export default ProjectCard;
