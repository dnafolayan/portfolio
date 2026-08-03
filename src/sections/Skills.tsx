function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            skills: ["Go", "Python", "JavaScript", "TypeScript"],
        },
        {
            title: "Backend",
            skills: ["Gin", "Express.js", "REST APIs", "JWT Auth"],
        },
        {
            title: "Frontend",
            skills: ["React", "Tailwind CSS", "Responsive UI", "State Mgmt"],
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "SQLite", "Prisma"],
        },
        {
            title: "Tools",
            skills: ["Git", "Linux", "Docker", "Postman"],
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="mb-10">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400/80">
                        What I work with
                    </p>
                    <h2 className="text-3xl font-bold font-mono text-cyan-400 md:text-4xl">
                        Skills
                    </h2>
                    <p className="mt-4 max-w-2xl text-gray-300">
                        I enjoy building reliable and user-friendly products
                        across the full stack, from APIs to polished interfaces.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-cyan-400/20 bg-gray-900/70 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] backdrop-blur-sm"
                        >
                            <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                                {group.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-gray-100 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/20"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
