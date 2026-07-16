import Aurora from "../components/backgrounds/Aurora";
import ShapeGrid from "../components/backgrounds/ShapeGrid";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { BackToTop } from "../components/ui/BackToTop";
import { ErrorBoundary } from "../components/ui/ErrorBoundary/ErrorBoundary";

function App() {
    return (
        <>
            <div className="fixed inset-0 -z-10">
                <ErrorBoundary fallback={null}>
                    <Aurora
                        colorStops={["#f97316", "#000000", "#ffffff"]}
                        amplitude={1.1}
                        blend={0.8}
                    />
                </ErrorBoundary>
                <div className="absolute inset-0 -z-[9]">
                    <ErrorBoundary fallback={null}>
                        <ShapeGrid
                            shape="hexagon"
                            squareSize={100}
                            speed={0.3}
                            hoverTrailAmount={3}
                            borderColor="rgba(255,255,255,0.08)"
                            hoverFillColor="rgba(255,107,53,0.12)"
                        />
                    </ErrorBoundary>
                </div>
            </div>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Work />
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;
