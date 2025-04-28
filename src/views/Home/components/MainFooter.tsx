import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const MainFooter: React.FC = () => {
    return (
        <footer className="border-gray-200 p-4  ">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2 600px:px-12">
                {/* Copyright for all screen sizes */}
                <motion.h1
                    className="text-sm text-black md:hidden text-center w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    ©{new Date().getFullYear()} gogetwell.ai
                </motion.h1>
                <motion.h1
                    className="text-xs text-black hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    ©{new Date().getFullYear()} gogetwell.ai
                </motion.h1>

                <motion.ul
                    className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {links.map((item, i) => (
                        <motion.li
                            key={i}
                            className="text-black hover:underline hover:text-blue-500 text-xs text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + i * 0.2, // Delay the animations sequentially
                            }}
                        >
                            <Link to={item.path}>{item.text}</Link>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    className="items-center gap-2 md:gap-8 hidden md:flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <FaTwitter size={25} className="text-primary" />
                        </motion.div>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <FaLinkedinIn size={25} className="text-primary" />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </footer>
    );
};

export default MainFooter;
