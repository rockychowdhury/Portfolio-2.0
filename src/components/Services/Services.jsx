import { Database, PanelsTopLeft, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="card-glass shadow-lg rounded-lg p-6 hover:scale-105 transition-transform text-center space-y-3"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center items-center bg-accent/20 text-accent w-16 h-16 rounded-full mx-auto"
            >
                <Icon size={30} />
            </motion.div>
            <h3 className="text-xl font-semibold text-darkText">
                {title}
            </h3>
            <p className="text-darkText/70">
                {description}
            </p>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: Code,
            title: 'Full Stack Developer',
            description: 'Build seamless solutions from the database to user interface.',
        },
        {
            icon: PanelsTopLeft,
            title: 'Frontend Developer',
            description: 'Craft interactive, responsive, and user-friendly web interfaces.',
        },
        {
            icon: Database,
            title: 'Backend Developer',
            description: 'Design secure, scalable APIs and optimize server performance.',
        },
    ];

    return (
        <ScrollAnimationWrapper direction="up">
            <div className='space-y-12'>
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-accent/30"></div>
                    <span className="shrink-0 px-6 bg-accent/20 border border-accent/50 py-2 text-accent rounded-full font-medium text-lg">Services</span>
                    <div className="h-px flex-1 bg-accent/30"></div>
                </div>
                <div className="py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard
                                key={idx}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={idx * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ScrollAnimationWrapper>
    );
};

export default Services;