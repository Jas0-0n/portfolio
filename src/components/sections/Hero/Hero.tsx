import { profile } from "../../../data/profile";
import { Button } from "../../ui/Button";
import TextType from "../../ui/TextType/TextType";

export function Hero() {
    return (
        <section
            className="min-h-screen flex items-center pt-16 relative overflow-hidden"
            id="hero"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/5 -right-1/10 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,107,53,0.25)_0%,transparent_70%)] opacity-50" />
                <div className="absolute inset-0 opacity-30 hero-grid-bg" />
            </div>
            <div className="max-w-[1120px] mx-auto px-6 relative z-10">
                <div className="flex gap-4 items-center text-sm text-text-ter font-mono mb-8">
                    <span className="text-green-400">●</span>
                    <span>{profile.status}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{profile.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{profile.location}</span>
                </div>
                <TextType
                    as="h1"
                    text={profile.headlines}
                    textColors={["inherit", "inherit", "#ff6b35"]}
                    className="text-[clamp(2.8rem,8vw,5rem)] font-black tracking-tight leading-[1.15] mb-6 max-w-[800px]"
                    typingSpeed={75}
                    deletingSpeed={50}
                    pauseDuration={500}
                    cursorClassName="text-accent"
                    showCursor={true}
                    accumulate={true}
                    separator={[<br key="br1" />, <br key="br2" />]}
                />
                <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-text-sec max-w-[520px] leading-7 mb-10">
                    {profile.subline}
                </p>
                <div className="flex gap-4 flex-wrap">
                    <Button href="#work">View my work {"->"}</Button>
                    <Button href="#contact" variant="secondary">
                        Get in touch ↗
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-ter text-[0.7rem] tracking-widest animate-bounce">
                <span>SCROLL</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </section>
    );
}
