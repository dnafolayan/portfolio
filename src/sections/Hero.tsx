function Hero() {
    return (
        <section id="hero" className="flex min-h-screen items-center">
            <div className="mx-auto w-full max-w-6xl">
                <div className="max-w-4xl">
                    {/* <p className="mb-6 text-2xl font-medium text-cyan-400 md:text-3xl">
                        Hello, I&apos;m
                    </p> */}
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
                        Divine Afolayan &#8203;—
                        <br className="hidden sm:block" />
                        <span className="mt-3 block font-mono text-cyan-400">
                            Backend Engineer building scalable systems
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                        I build reliable APIs, distributed systems, and
                        AI-powered backend solutions using Go, PostgreSQL, and
                        modern technologies.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://github.com/dnafolayan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
