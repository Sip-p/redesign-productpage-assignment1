import React from 'react';
import { motion } from 'framer-motion';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt className="text-blue-300 text-4xl" />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "bg-blue-500"
  },
  {
    icon: <FaUserSecret className="text-purple-300 text-4xl" />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "bg-purple-500"
  },
  {
    icon: <BiMessageSquare className="text-green-300 text-4xl" />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "bg-green-500"
  },
  {
    icon: <FiFileText className="text-orange-300 text-4xl" />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "bg-orange-500"
  },
  {
    icon: <BiTrendingUp className="text-pink-300 text-4xl" />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "bg-pink-500"
  },
  {
    icon: <BsDatabase className="text-indigo-300 text-4xl" />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "bg-indigo-500"
  },
  {
    icon: <LuLanguages className="text-red-300 text-4xl" />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "bg-red-500"
  },
  {
    icon: <BiCreditCard className="text-teal-300 text-4xl" />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "bg-teal-500"
  },
  {
    icon: <BiSearch className="text-cyan-300 text-4xl" />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "bg-cyan-500"
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Our Comprehensive Solutions
          <motion.div
            className="absolute w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 left-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300"
          ></motion.div>
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white shadow-xl overflow-hidden cursor-pointer border-[1px] border-gray-300 transition-all duration-500"
            >
              {/* Broken Glass Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-100"
                style={{
                  clipPath: "polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)",
                }}
                whileHover={{
                  rotate: 5, // Rotate slightly clockwise
                  transition: { type: "spring", stiffness: 150, damping: 10 }
                }}
              ></motion.div>

              <div className="relative z-10 bg-white rounded-[1rem] p-6">
                {/* Icon */}
                <div className="mb-4">{solution.icon}</div>
                {/* Heading Hover Effect */}
                <motion.h3
                  whileHover={{
                    color: "#4B8DFF",
                    textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)"
                  }}
                  className="text-xl font-semibold mb-4 text-gray-800"
                >
                  {solution.title}
                </motion.h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;