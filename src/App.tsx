import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </main>
    );
}

export default App;
