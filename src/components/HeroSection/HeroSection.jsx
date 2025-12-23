import profile from '../../assets/profile.jpg'
import SocialLinks from '../common/SocialLinks';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <ScrollAnimationWrapper direction="up">
            <motion.div
                className='py-20 flex flex-col items-center space-y-6 justify-between'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.figure variants={itemVariants} className='relative w-fit'>
                    <motion.img
                        className='rounded-full border-4 border-accent/30 shadow-lg'
                        src={profile}
                        alt="Rocky Chowdhury"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                    <motion.h1
                        className='bg-accent/20 border border-accent/50 w-fit px-5 py-1 font-semibold rounded-full -right-32 top-24 -rotate-6 absolute text-accent'
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        Rocky Chowdhury
                    </motion.h1>
                </motion.figure>

                <motion.h2 variants={itemVariants} className='font-bold text-5xl text-darkText text-center'>
                    A Full-Stack Developer
                </motion.h2>

                <motion.h4 variants={itemVariants} className='text-darkText/80 text-center max-w-2xl text-lg'>
                    I'm always eager to expand my skill set and stay current with the latest technology
                </motion.h4>

                <motion.div
                    variants={itemVariants}
                    className='bg-accent/10 border border-accent/40 px-6 py-3 rounded-full font-logo text-accent text-center'
                    whileHover={{ scale: 1.05 }}
                >
                    &quot;- With Small Steps, I Will Go Very Far_&quot;
                </motion.div>

                <motion.div variants={itemVariants}>
                    <SocialLinks />
                </motion.div>
            </motion.div>
        </ScrollAnimationWrapper>
    );
};

export default HeroSection;