import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import { animateScroll as scroll } from "react-scroll";
import { ChevronDoubleUpIcon } from "@heroicons/react/solid";

function App() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="main">
            <div className="top-btn">
                <ChevronDoubleUpIcon onClick={scrollToTop} />
            </div>
            <Navbar />
            <Landing />
            <About />
        </div>
    );
}

export default App;
