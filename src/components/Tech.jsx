import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoGitlab,
} from "react-icons/bi";
import { SiFigma, SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";

// Custom Photoshop Icon (SVG)
const PhotoshopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="#31A8FF"
    style={{ width: "32px", height: "32px" }}
  >
    <rect width="32" height="32" rx="6" fill="#001E36" />
    <text
      x="8"
      y="22"
      fill="white"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      fontSize="16"
    >
      Ps
    </text>
  </svg>
);

const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML",
        icon: <BiLogoHtml5 className="text-4xl text-orange-600" />,
      },
      { name: "CSS", icon: <BiLogoCss3 className="text-4xl text-blue-600" /> },
      {
        name: "Bootstrap",
        icon: <BiLogoBootstrap className="text-4xl text-purple-600" />,
      },
      {
        name: "Tailwind CSS",
        icon: <BiLogoTailwindCss className="text-4xl text-teal-500" />,
      },
      {
        name: "JavaScript",
        icon: <BiLogoJavascript className="text-4xl text-yellow-500" />,
      },
      {
        name: "React",
        icon: <BiLogoReact className="text-4xl text-cyan-500" />,
      },
    ],
  },
  {
    category: "Design",
    technologies: [
      {
        name: "Figma",
        icon: <SiFigma className="text-[#F24E1E] text-4xl" />,
      },
      {
        name: "Photoshop",
        icon: <PhotoshopIcon />,
      },
      {
        name: "Adobe Illustrator",
        icon: (
          <SiAdobeillustrator style={{ color: "#FF9A00", fontSize: "32px" }} />
        ),
      },
    ],
  },
  {
    category: "Infrastructure & Collaboration",
    technologies: [
      {
        name: "GitHub",
        icon: <BiLogoGithub className="text-4xl text-gray-600" />,
      },
      {
        name: "GitLab",
        icon: <BiLogoGitlab className="text-4xl text-orange-600" />,
      },
    ],
  },
];

const Tech = () => {
  return (
    <div id="tech">
      <div className="flex flex-col justify-center max-w-screen-xl px-6 mx-auto text-gray-200">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-12 text-5xl font-semibold text-center text-white">
            Technologies I've Worked With
          </h1>
          <p className="mb-12 text-lg text-center md:text-xl">
            I have hands-on experience working with a range of technologies in
            the frontend, design, and collaboration spaces.
          </p>

          <div className="space-y-12">
            {/* Frontend Section */}
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 border border-purple-800 shadow-xl rounded-xl bg-purple-900/30"
              >
                <h3 className="mb-6 text-3xl font-bold text-center text-white">
                  {skill.category}
                </h3>

                {/* Centered and Justified Technologies */}
                <div className="flex flex-wrap items-center justify-center space-x-12">
                  {skill.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-4 space-y-3 transition duration-300 ease-in-out rounded-lg shadow-lg bg-purple-800/20 hover:bg-purple-800/30"
                    >
                      <span className="text-4xl">{tech.icon}</span>
                      <span className="text-xl font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
