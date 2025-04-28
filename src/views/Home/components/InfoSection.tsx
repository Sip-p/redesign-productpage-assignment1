import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import aboutUs from '@/assets/images/about_us.gif';
import mission from '@/assets/images/our_mission.gif';
import challenges from '@/assets/images/challenges_solve.gif';

interface FullPageSectionProps {
    img: any;
    icon1: ReactNode;
    icon2: ReactNode;
    title: string;
    content1: string;
    content2: string;
    icontitle1: string;
    iconp1: string;
    icontitle2: string;
    iconp2: string;
    status: 'left' | 'right';
}

// Sparkle Animation
const sparkleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
};

// Generate random sparkles
const Sparkles = () => {
    const sparklePositions = Array.from({ length: 20 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
    }));

    return (
        <>
            {sparklePositions.map((pos, idx) => (
                <motion.div
                    key={idx}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-75"
                    style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                />
            ))}
        </>
    );
};

const FullPageSection: React.FC<FullPageSectionProps> = ({
    status, img, icon1, icon2, title, content1, content2, icontitle1, iconp1, icontitle2, iconp2,
}) => {
    return (
        <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-center py-10 px-4 lg:px-16 bg-sky-100 overflow-hidden rounded-2xl gap-8 my-6">
            {/* Sparkles */}
            <Sparkles />

            {/* Image Section */}
            <motion.div
                className={`w-full lg:w-1/2 flex items-center justify-center ${status === 'left' ? 'order-last lg:order-first' : 'order-first lg:order-last'}`}
                initial={{ opacity: 0, x: status === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <img
                    src={img}
                    alt={title}
                    className="w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
            </motion.div>

            {/* Content Section */}
            <motion.div
                className={`w-full lg:w-1/2 flex flex-col justify-center p-6 rounded-2xl bg-white shadow-2xl hover:scale-[1.02] transition-transform duration-500 ${status === 'left' ? 'order-first lg:order-last' : 'order-last lg:order-first'}`}
                initial={{ opacity: 0, x: status === 'left' ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
                    <div className="h-1 w-16 bg-primary rounded-full"></div>
                </div>

                <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">{content1}</p>
                    {content2 && <p className="leading-relaxed">{content2}</p>}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-full text-primary">{icon1}</div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{icontitle1}</h4>
                            <p className="text-sm text-gray-600">{iconp1}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-full text-primary">{icon2}</div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{icontitle2}</h4>
                            <p className="text-sm text-gray-600">{iconp2}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const FullPageSections = () => {
    return (
        <div className="relative space-y-12 px-2 py-6">
            <FullPageSection
                status="left"
                img={aboutUs}
                icon1={<i className="fas fa-heart"></i>}
                icon2={<i className="fas fa-cogs"></i>}
                title="About Us"
                content1="We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders."
                content2="We strive to become the leading platform for healthcare tourism management and digital transformation."
                icontitle1="Modern Solutions"
                iconp1="Leveraging AI technology for healthcare."
                icontitle2="Patient-Centric"
                iconp2="Personalized healthcare experiences."
            />
            <FullPageSection
                status="right"
                img={mission}
                icon1={<i className="fas fa-rocket"></i>}
                icon2={<i className="fas fa-users"></i>}
                title="Our Mission"
                content1="Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys."
                content2=""
                icontitle1="AI-Powered Solutions"
                iconp1="Optimizing operations with advanced technology."
                icontitle2="Growth Focus"
                iconp2="Maximizing revenue and opportunities."
            />
            <FullPageSection
                status="left"
                img={challenges}
                icon1={<i className="fas fa-tachometer-alt"></i>}
                icon2={<i className="fas fa-users-cog"></i>}
                title="The Challenges We Solve"
                content1="Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities."
                content2="Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike."
                icontitle1="Efficient Operations"
                iconp1="Streamlined booking and management."
                icontitle2="Enhanced Support"
                iconp2="Improved patient communication."
            />
        </div>
    );
};

export default FullPageSections;
