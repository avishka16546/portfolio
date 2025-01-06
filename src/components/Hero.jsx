import cartoon from "/public/buddhi l.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center w-full min-h-screen px-16 py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={cartoon}
            alt="cartoon"
            className=" w-[300px] cursor-pointer rounded-full shadow-xl shadow-blue-900
                    transition-all duration-300 hover:-translate-y-5  hover:scale-105 hover:shadow-2xl hover:shadow-blue-600 md:w-[350px] "
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center "
        >
          <h1 className="text-5xl font-light text-transparent bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text md:text-7xl ">
            Buddhi Avishka
          </h1>
          <h3 className="text-2xl font-light text-transparent bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text md:text-3xl ">
            Frontend developer & Designer
          </h3>
          <p className="text-sm text-gray-400 md:text-base text-pretty">
            Let’s focus on delivering meaningful solutions, embracing challenges
            as opportunities to refine and improve.
            <p>
              (Every challenge is a step toward excellence!{" "}
              <span role="img" aria-label="gear">
                ⚙️
              </span>
              )
            </p>{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
