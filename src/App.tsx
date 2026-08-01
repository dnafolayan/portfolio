import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </main>
    );
};

export default App;
