import React from 'react';
import SecondaryBg from '../common/SecondaryBg';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';
import SkillCard from './SkillCard';
import { skillCategories } from './SkillsData';

const SkillCategorySection = ({ category, description, skills, color, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-4"
        >
            {/* Category Header */}
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{ width: isEven ? 40 : 60 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className={`h-1 rounded-full bg-gradient-to-r ${color}`}
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-darkText">{category}</h3>
                        <p className="text-sm text-darkText/60">{description}</p>
                    </div>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill, skillIndex) => (
                    <SkillCard
                        key={skillIndex}
                        skill={skill}
                        index={skillIndex}
                        categoryColor={color}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const Stacks = () => {
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

    const getTotalSkills = () => {
        return skillCategories.reduce((total, cat) => total + cat.skills.length, 0);
    };

    return (
        <SecondaryBg>
            <div className='container py-16 space-y-12'>
                {/* Header Section */}
                <ScrollAnimationWrapper direction="up">
                    <div className='space-y-4'>
                        <div className='flex flex-wrap gap-3 items-center'>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className='bg-accent text-darkBg w-fit px-5 py-2 rounded-full text-sm font-bold shadow-glow'
                            >
                                TECHNOLOGIES
                            </motion.span>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className='bg-highlight text-darkBg w-fit px-5 py-2 rounded-full text-sm font-bold shadow-glow'
                            >
                                TOOLS
                            </motion.span>
                            <span className='text-darkText/50'>&</span>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className='bg-accent/20 border border-accent text-accent w-fit px-5 py-2 rounded-full text-sm font-bold'
                            >
                                SKILLS
                            </motion.span>
                        </div>
                        <div>
                            <h2 className='text-4xl md:text-5xl font-bold text-darkText'>
                                Professional Stack
                            </h2>
                            <p className='text-darkText/70 mt-2 text-lg'>
                                {getTotalSkills()}+ technologies mastered across {skillCategories.length} expertise areas
                            </p>
                        </div>
                    </div>
                </ScrollAnimationWrapper>

                {/* Skills by Category */}
                <motion.div
                    className='space-y-12'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {skillCategories.map((cat, idx) => (
                        <SkillCategorySection
                            key={idx}
                            category={cat.category}
                            description={cat.description}
                            skills={cat.skills}
                            color={cat.color}
                            index={idx}
                        />
                    ))}
                </motion.div>

                {/* Summary Stats */}
                <ScrollAnimationWrapper direction="up">
                    <motion.div
                        className='card-glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center'
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className='text-3xl font-bold text-accent'>{getTotalSkills()}+</p>
                            <p className='text-sm text-darkText/70'>Skills</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className='text-3xl font-bold text-accent'>{skillCategories.length}</p>
                            <p className='text-sm text-darkText/70'>Categories</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className='text-3xl font-bold text-accent'>90%+</p>
                            <p className='text-sm text-darkText/70'>Avg Proficiency</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className='text-3xl font-bold text-accent'>5+</p>
                            <p className='text-sm text-darkText/70'>Years Growth</p>
                        </motion.div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </SecondaryBg>
    );
};

export default Stacks;
