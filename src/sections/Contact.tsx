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
        <section id="contact" className="px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101510] p-8 md:p-14">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-36 h-96 w-96 rounded-full bg-[#a5ef57]/[0.08] blur-[100px]" />
                    <div className="relative">
                        <p className="mb-3 text-xs uppercase tracking-[.2em] text-[#b5f36b]">
                            Let’s connect
                        </p>
                        <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                            Contact
                        </h2>
                        <p className="mb-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
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
                                        className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-[#b5f36b]/40 hover:text-[#d4ffac]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="mt-8 text-xs text-white/30">
                    © {new Date().getFullYear()} Divine Afolayan
                </p>
            </div>
        </section>
    );
}

export default Contact;
