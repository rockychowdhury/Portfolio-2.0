import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimationWrapper = ({ children, direction = 'up', duration = 0.6 }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const variants = {
        up: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
        },
        down: {
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 },
        },
        left: {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
        },
        right: {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants[direction]}
            transition={{ duration, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimationWrapper;
