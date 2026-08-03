function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-8 text-gray-400 h-20 border-b border-cyan-400 fixed top-0 left-0 right-0 bg-black z-50">
            <h3 className="text-xl font-bold font-mono">Divine Afolayan</h3>

            <ul className="flex space-x-6 text-lg font-mono">
                <li className="hover:text-cyan-400 transition">
                    <a href="#hero">Home</a>
                </li>
                <li className="hover:text-cyan-400 transition">
                    <a href="#about">About</a>
                </li>
                <li className="hover:text-cyan-400 transition">
                    <a href="#skills">Skills</a>
                </li>
                <li className="hover:text-cyan-400 transition">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-cyan-400 transition">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
