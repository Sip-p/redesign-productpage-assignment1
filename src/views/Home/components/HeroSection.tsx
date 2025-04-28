// import React from 'react';
// import { motion } from 'framer-motion';
// import smallBG from '@/assets/images/main-bg-small.png';
// import { Button } from '@/components/ui';
// import HomeNavbar from '@/components/shared/HomeNav';
// import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

// interface HeroSectionProps {
//   scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
//   featuresRef: React.RefObject<HTMLElement>;
//   contactRef: React.RefObject<HTMLElement>;
//   aboutRef: React.RefObject<HTMLElement>;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   scrollToSection,
//   featuresRef,
//   contactRef,
//   aboutRef,
// }) => {
//   return (
//     <div className="bg-[#0d1745] w-full relative flex flex-col overflow-hidden">
      
//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50 bg-blue-950 h-[60px] md:h-[70px] lg:h-[80px] flex items-center">
//         <HomeNavbar scrollToSection={scrollToSection} featuresRef={featuresRef} contactRef={contactRef} aboutRef={aboutRef} />
//       </div>

//       {/* Main Content */}
//       <div className="min-h-screen flex items-center justify-center relative px-4 md:px-10 lg:px-16 pt-[90px] md:pt-[100px] lg:pt-[120px]">
        
//         {/* Mobile Background */}
//         <img src={smallBG} alt="background_image" className="absolute top-0 left-0 w-full h-full object-cover md:hidden z-[-10]" />

//         {/* Dark overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

//         {/* Sparkles Animation */}
//         {[...Array(50)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] opacity-100 shadow-[0_0_10px_3px_rgba(108,99,255,1)]"
//             animate={{ opacity: [0.7, 1, 0.7], scale: [0.8, 1.3, 0.8], x: ["-30vw", "30vw"], y: ["-30vh", "30vh"] }}
//             transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
//             style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//           />
//         ))}

//         {/* Particle Effects */}
//         {[...Array(20)].map((_, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-70 shadow-[0_0_8px_2px_rgba(106,17,203,1)]"
//             animate={{
//               opacity: [0.5, 1, 0.5],
//               scale: [0.3, 1.2, 0.8],
//               y: [-15, 15, -15],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//             }}
//             style={{ top: `${Math.random() * 50 + 30}%`, left: `${Math.random() * 50 + 25}%` }}
//           />
//         ))}

//         {/* Content Section */}
//         <div className="relative z-10 text-white w-full flex flex-col items-center text-center max-w-[1200px] mx-auto">

//           {/* Glassmorphism Box */}
//           <motion.div
//             className="w-full max-w-[600px] bg-white bg-opacity-5 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-white border-opacity-20"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
//               <span className="text-primary">AI Front Office</span> for Healthcare Agents
//             </h1>
//             <p className="text-lg sm:text-xl my-4 font-semibold text-white">
//               Create an{' '}
//               <span className="font-extrabold bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb] text-transparent bg-clip-text">
//                 AI Store
//               </span>{' '}
//               in 2 min <br />
//               Scale with{' '}
//               <span className="font-extrabold bg-gradient-to-r from-[#833262] via-[#fc25c3] to-[#6a11cb] text-transparent bg-clip-text">
//                 Digital Marketing
//               </span>
//             </p>

//             {/* Get Started Button */}
//             <div className="mt-6">
//               <HcfSignupPopup popupButtonStatus buttonChildren={
//                 <Button block variant="solid" className="rounded-md bg-[#0d1745] text-white">
//                   Get Started
//                 </Button>
//               } />
//             </div>
//           </motion.div>

//           {/* Stats Section */}
//           <div className="text-white flex flex-wrap gap-8 mt-10 justify-center">
//             {[
//               { count: "2100+", label: "Qualified Doctors" },
//               { count: "1000+", label: "Hospitals" },
//               { count: "800+", label: "Treatment Plans" },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="w-[250px] h-[150px] bg-white bg-opacity-5 backdrop-blur-xl rounded-lg p-4 shadow-lg border border-white border-opacity-20 flex flex-col items-center justify-center"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
//               >
//                 <h1 className="text-3xl sm:text-4xl font-bold text-white">{item.count}</h1>
//                 <p className="text-lg text-white">{item.label}</p>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';
import { motion } from 'framer-motion';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

import { Meta } from '@/@types/routes';

interface HeroSectionProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  meta?: Meta; // ✅ Made meta optional
}


 

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToSection,
  featuresRef,
  contactRef,
  aboutRef,
  meta,  // Destructure the meta prop
}) => {
  return (
    <div className="bg-[#0d1745] w-full relative flex flex-col overflow-hidden">
      
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-blue-950 h-[60px] md:h-[70px] lg:h-[80px] flex items-center">
        <HomeNavbar scrollToSection={scrollToSection} featuresRef={featuresRef} contactRef={contactRef} aboutRef={aboutRef} />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center relative px-4 md:px-10 lg:px-16 pt-[90px] md:pt-[100px] lg:pt-[120px]">
        
        {/* Mobile Background */}
        <img src={smallBG} alt="background_image" className="absolute top-0 left-0 w-full h-full object-cover md:hidden z-[-10]" />

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

        {/* Sparkles Animation */}
        {[...Array(50)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] opacity-100 shadow-[0_0_10px_3px_rgba(108,99,255,1)]"
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.8, 1.3, 0.8], x: ["-30vw", "30vw"], y: ["-30vh", "30vh"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}

        {/* Particle Effects */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-70 shadow-[0_0_8px_2px_rgba(106,17,203,1)]"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.3, 1.2, 0.8],
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{ top: `${Math.random() * 50 + 30}%`, left: `${Math.random() * 50 + 25}%` }}
          />
        ))}

        {/* Content Section */}
        <div className="relative z-10 text-white w-full flex flex-col items-center text-center max-w-[1200px] mx-auto">

          {/* Glassmorphism Box */}
          <motion.div
            className="w-full max-w-[600px] bg-white bg-opacity-5 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-white border-opacity-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              <span className="text-primary">AI Front Office</span> for Healthcare Agents
            </h1>
            <p className="text-lg sm:text-xl my-4 font-semibold text-white">
              Create an{' '}
              <span className="font-extrabold bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#6a11cb] text-transparent bg-clip-text">
                AI Store
              </span>{' '}
              in 2 min <br />
              Scale with{' '}
              <span className="font-extrabold bg-gradient-to-r from-[#833262] via-[#fc25c3] to-[#6a11cb] text-transparent bg-clip-text">
                Digital Marketing
              </span>
            </p>

            {/* Get Started Button */}
            <div className="mt-6">
              <HcfSignupPopup popupButtonStatus buttonChildren={
                <Button block variant="solid" className="rounded-md bg-[#0d1745] text-white">
                  Get Started
                </Button>
              } />
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="text-white flex flex-wrap gap-8 mt-10 justify-center">
            {[{ count: "2100+", label: "Qualified Doctors" },
              { count: "1000+", label: "Hospitals" },
              { count: "800+", label: "Treatment Plans" }].map((item, index) => (
              <motion.div
                key={index}
                className="w-[250px] h-[150px] bg-white bg-opacity-5 backdrop-blur-xl rounded-lg p-4 shadow-lg border border-white border-opacity-20 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{item.count}</h1>
                <p className="text-lg text-white">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
