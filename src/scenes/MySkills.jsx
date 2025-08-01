import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-8 sm:mt-12 lg:mt-16">
        <motion.div
          className="md:w-1/3 px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
	  
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="bg-gradient-neon bg-clip-text text-transparent">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-gray-300 leading-relaxed">
            Passionate about creating cutting-edge solutions with modern technologies. 
            Always learning, always growing, always innovating.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0 px-4 sm:px-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-neon-blue before:shadow-glow before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 hover:shadow-glow-lg transition-all duration-300 w-full h-auto"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10 hover:shadow-glow transition-all duration-300 w-full h-auto max-w-md mx-auto" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col md:flex-row md:justify-between mt-12 sm:mt-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-0">
        {/* EXPERIENCE */}
        <motion.div
          className="flex-1 glass-card rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24 sm:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl bg-gradient-neon bg-clip-text text-transparent">01</p>
              <p className="font-playfair font-semibold text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 text-neon-blue">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 sm:h-32 bg-gradient-neon opacity-20 absolute right-0 top-0 z-[-1] rounded-lg" />
          </div>
          <p className="mt-4 sm:mt-5 text-gray-300 leading-relaxed text-sm sm:text-base">
            5+ years of hands-on experience in full-stack development, working with 
            React, Node.js, Python, and cloud technologies to deliver scalable solutions.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="flex-1 glass-card rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24 sm:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl bg-gradient-neon bg-clip-text text-transparent">02</p>
              <p className="font-playfair font-semibold text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 text-neon-purple">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 sm:h-32 bg-gradient-to-r from-neon-purple to-neon-pink opacity-20 absolute right-0 top-0 z-[-1] rounded-lg" />
          </div>
          <p className="mt-4 sm:mt-5 text-gray-300 leading-relaxed text-sm sm:text-base">
            Always exploring cutting-edge technologies and methodologies to create 
            unique, efficient solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* CREATIVE */}
        <motion.div
          className="flex-1 glass-card rounded-lg p-4 sm:p-6 hover:shadow-glow transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-24 sm:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl sm:text-4xl lg:text-5xl bg-gradient-neon bg-clip-text text-transparent">03</p>
              <p className="font-playfair font-semibold text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 text-neon-pink">
                Creative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 sm:h-32 bg-gradient-to-r from-neon-pink to-yellow opacity-20 absolute right-0 top-0 z-[-1] rounded-lg" />
          </div>
          <p className="mt-4 sm:mt-5 text-gray-300 leading-relaxed text-sm sm:text-base">
            Combining technical expertise with creative vision to design 
            intuitive user experiences and elegant code architectures.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
