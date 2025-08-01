import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 }
}

const Project = ({title}) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition-all duration-500 bg-glass-bg backdrop-blur-lg z-30 flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8 text-white border border-glass-border rounded-lg`;
	const projectTitle = title.split(" ").join("-").toLowerCase();
	return (
		<motion.div 
			variants={projectVariant} 
			className="relative hover:scale-105 transition-all duration-300 hover:shadow-glow rounded-lg overflow-hidden w-full h-64 sm:h-80 lg:h-96"
		>
			<div
				className={overlayStyles}
			>
				<p className="text-lg sm:text-xl lg:text-2xl font-playfair bg-gradient-neon bg-clip-text text-transparent mb-3 sm:mb-4">{title}</p>
				<p
					className="text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed"
				>A cutting-edge project showcasing modern web technologies and innovative design patterns. Built with passion and attention to detail.</p>
			</div>
			<img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} className="w-full h-full object-cover" />
		</motion.div>
	)
}

const Projects = () => {
  return (
		<section id="projects" className="my-36 py-16 sm:py-20 lg:py-24">
		<motion.div
			className="md:w-2/4 mx-auto text-center px-4 sm:px-0"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0,  y: -50 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			<div>
				<p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5">
					MY <span className="bg-gradient-neon bg-clip-text text-transparent">PRO</span>JECTS
				</p>
				<div className="flex justify-center mt-5">
					<LineGradient width="w-1/3" />
				</div>
			</div>
			<p className="mt-8 sm:mt-10 mb-8 sm:mb-10 text-gray-300 leading-relaxed text-sm sm:text-base">
				A showcase of my latest work featuring modern web applications, 
				innovative designs, and cutting-edge technologies.
			</p>
		</motion.div>
		{/* PROJECTS */}
		<div className="flex justify-center mt-12 sm:mt-16 px-4 sm:px-0">
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
			variants={container}
		>
			{/* ROW1 */}
			<div
				className="flex justify-center text-center items-center p-6 sm:p-8 lg:p-10 bg-gradient-neon w-full h-64 sm:h-80 lg:h-96 text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-white rounded-lg shadow-glow"
			>
				BEAUTIFUL USER INTERFACES	
			</div>	
			<Project title="Project 1" />		
			<Project title="Project 2" />

			{/* ROW 2 */}
			<Project title="Project 3" />
			<Project title="Project 4" />
			<Project title="Project 5" />

			{/* ROW 3 */}
			<Project title="Project 6" />
			<Project title="Project 7" />
			<div
				className="flex justify-center text-center items-center p-6 sm:p-8 lg:p-10 bg-gradient-modern w-full h-64 sm:h-80 lg:h-96 text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-white rounded-lg shadow-glow"
			>
				SMOOTH USER EXPERIENCE	
			</div>

		</motion.div>					 
		</div>
		</section>
		
	)
}

export default Projects