
import { useEffect, useState } from 'react';
import PrimaryBG from '../common/PrimaryBG';
import { motion } from 'framer-motion';
import Project from './Project';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <PrimaryBG>
            <div className='container py-20 space-y-8'>
                <ScrollAnimationWrapper direction="up">
                    <div className='space-y-2'>
                        <h1 className='text-4xl font-semibold text-darkText'>Featured Projects</h1>
                        <p className='text-darkText/70'>Showcasing my best work across different technologies</p>
                    </div>
                </ScrollAnimationWrapper>

                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {
                        projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                viewport={{ once: true, margin: '-50px' }}
                            >
                                <Project project={project}></Project>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </PrimaryBG>
    );
};

export default Projects;