import { motion } from "framer-motion";
import { useState } from "react";
import aboutImage from "../../../assests/About_Us.jpeg"; // replace with your own image path

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Sustainability
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Caring For Our Planet
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Sustainability is a core pillar at our company, and one that we are
            constantly reviewing, researching, and reevaluating.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            We are working towards being a more responsible business every day,
            taking steps like using organic and natural fibers, reducing waste,
            and implementing eco-friendly dyeing processes. We aim to do more
            for the planet—and for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore((prev) => !prev)}
            className="mt-6 inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 text-sm font-medium rounded transition-all"
          >
            {showMore ? "Hide Details" : "Learn More"}
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={aboutImage}
            alt="About us"
            className="w-2xl rounded-lg object-cover shadow-md"
          />
        </motion.div>
      </div>

      {/* Additional Info Section */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-12 max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Our Ongoing Commitment
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            From water-saving initiatives to ethical labor practices, our mission is to build a sustainable future for the next generation. We’ve partnered with global organizations to enhance supply chain transparency and support community-led eco projects. This isn’t just a goal—it’s a movement we’re proud to lead.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default About;
