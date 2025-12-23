import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, Award, Users } from 'lucide-react';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const StatCard = ({ icon: Icon, number, label, description }) => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="card-glass rounded-2xl p-6 text-center space-y-3"
        >
            <motion.div
                animate={inView ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto"
            >
                <Icon size={32} className="text-accent" />
            </motion.div>
            <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-bold text-accent"
            >
                {number}
            </motion.h3>
            <h4 className="font-semibold text-lg text-darkText">{label}</h4>
            <p className="text-darkText/70 text-sm">{description}</p>
        </motion.div>
    );
};

const Statistics = () => {
    const stats = [
        {
            icon: Code,
            number: '50+',
            label: 'Projects',
            description: 'Completed projects showcasing diverse tech stacks',
        },
        {
            icon: Briefcase,
            number: '3+',
            label: 'Years Experience',
            description: 'Full-stack development experience',
        },
        {
            icon: Award,
            number: '15+',
            label: 'Technologies',
            description: 'Proficient across multiple frameworks and tools',
        },
        {
            icon: Users,
            number: '100+',
            label: 'Happy Clients',
            description: 'Delivered quality solutions to diverse clients',
        },
    ];

    return (
        <div className='bg-dark-gradient-alt py-20 relative overflow-hidden'>
            <div className='absolute inset-0 bg-glow-gradient pointer-events-none'></div>
            <div className='container relative z-10 space-y-12'>
                <ScrollAnimationWrapper direction="up">
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl font-bold text-darkText'>By The Numbers</h2>
                        <p className='text-darkText/70 max-w-2xl mx-auto'>
                            Transforming ideas into reality with clean code and modern solutions
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <StatCard {...stat} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
