function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080b09]/75 backdrop-blur-2xl">
            <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-6 lg:px-8">
                <a href="#hero" className="text-sm font-semibold tracking-tight text-white">
                    Divine Afolayan
                </a>

                <div className="flex items-center gap-8">
                    <ul className="hidden items-center gap-8 text-[13px] font-medium text-white/60 md:flex">
                        <li className="transition hover:text-white">
                            <a href="#hero">Home</a>
                        </li>
                        <li className="transition hover:text-white">
                            <a href="#about">About</a>
                        </li>
                        <li className="transition hover:text-white">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="transition hover:text-white">
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-[#b5f36b] px-4 py-2 text-[13px] font-semibold text-[#10150b] transition hover:bg-[#c7fb89] focus:outline-none focus:ring-2 focus:ring-[#b5f36b]"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
