function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl shadow-[0_24px_80px_-48px_rgba(15,23,42,0.9)]">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
                <h3 className="text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    Divine Afolayan
                </h3>

                <div className="flex items-center gap-8">
                    <ul className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
                        <li className="transition hover:text-cyan-300">
                            <a href="#hero">Home</a>
                        </li>
                        <li className="transition hover:text-cyan-300">
                            <a href="#about">About</a>
                        </li>
                        <li className="transition hover:text-cyan-300">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="transition hover:text-cyan-300">
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
