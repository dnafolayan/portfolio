function About() {
    return (
        <section id="about" className="min-h-screen flex items-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-cyan-950/40 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] md:p-12">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400/80">
                        Who I am
                    </p>
                    <h2 className="mb-6 text-3xl font-bold font-mono text-cyan-400 md:text-4xl">
                        About Me
                    </h2>
                    <p className="max-w-3xl text-lg leading-8 text-gray-300">
                        I’m an aspiring backend engineer focused on building
                        scalable systems and developer-friendly tools with
                        technologies like Go, Python, JavaScript, and modern
                        databases. I’m passionate about learning new
                        technologies, designing reliable APIs, exploring
                        distributed systems, and growing deeper in AI
                        engineering.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
