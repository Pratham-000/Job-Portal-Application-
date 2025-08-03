import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Intel",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intel.svg",
  },
];

const Companies = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted By Top Companies
        </motion.h2>
        <motion.p
          className="mt-2 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We’re proud to have collaborated with industry leaders worldwide.
        </motion.p>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-3 gap-8 items-center justify-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {companies.map((company, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 grayscale hover:grayscale-0 transition duration-300 dark:invert"

            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Companies;
