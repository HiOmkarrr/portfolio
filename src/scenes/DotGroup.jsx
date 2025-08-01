import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-neon-blue shadow-glow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-neon-blue before:left-[-50%] before:top-[-50%] before:shadow-glow`;

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-50">
            <AnchorLink
                className={`${selectedPage === "home" ? selectedStyles: "bg-glass-bg border border-glass-border"} 
                w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-glow`}
                href={`#home`}
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${selectedPage === "skills" ? selectedStyles: "bg-glass-bg border border-glass-border"} 
                w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-glow`}
                href={`#skills`}
                onClick={() => setSelectedPage('skills')}
            />
            <AnchorLink
                className={`${selectedPage === "projects" ? selectedStyles: "bg-glass-bg border border-glass-border"} 
                w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-glow`}
                href={`#projects`}
                onClick={() => setSelectedPage('projects')}
            />
            <AnchorLink
                className={`${selectedPage === "testimonials" ? selectedStyles: "bg-glass-bg border border-glass-border"} 
                w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-glow`}
                href={`#testimonials`}
                onClick={() => setSelectedPage('testimonials')}
            />
            <AnchorLink
                className={`${selectedPage === "contact" ? selectedStyles: "bg-glass-bg border border-glass-border"} 
                w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-glow`}
                href={`#contact`}
                onClick={() => setSelectedPage('contact')}
            />
        </div>
    )
}

export default DotGroup;