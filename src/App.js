import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="main">
            <div className="top-btn" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faAngleDoubleUp} className="text-2xl" />
            </div>
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
