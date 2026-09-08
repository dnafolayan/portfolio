import { type Variants, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const reveal: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

function SectionReveal({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
        >
            {children}
        </motion.div>
    );
}

function App() {
    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen">
            <Navbar />
            <SectionReveal>
                <Hero />
            </SectionReveal>
            <SectionReveal>
                <About />
            </SectionReveal>
            <SectionReveal>
                <Skills />
            </SectionReveal>
            <SectionReveal>
                <Projects />
            </SectionReveal>
            <SectionReveal>
                <Contact />
            </SectionReveal>
        </div>
    );
}

export default App;
