function Contact() {
    const links: { label: string; href: string }[] = [
        {
            label: "Email",
            href: "mailto:divineafolayan05@gmail.com",
        },
        {
            label: "GitHub",
            href: "https://github.com/dnafolayan",
        },
        {
            label: "X",
            href: "https://x.com/dnafolayan",
        },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-cyan-950/40 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] md:p-12">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400/80">
                        Let’s connect
                    </p>
                    <h2 className="mb-4 text-3xl font-bold font-mono text-cyan-400 md:text-4xl">
                        Contact
                    </h2>
                    <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-300">
                        I’m interested in building software, exploring new
                        technologies, and connecting with people working on
                        interesting problems.
                    </p>

                    <ul className="flex flex-wrap gap-4">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/20"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;
