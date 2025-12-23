import { motion } from 'framer-motion';

const SkillCard = ({ skill, index, categoryColor }) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.05,
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const proficiencyPercentage = skill.proficiency;

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group card-glass rounded-xl p-4 space-y-3 hover:shadow-glow transition-all duration-300"
        >
            {/* Icon Container */}
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex justify-center items-center h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg group-hover:from-accent/30 group-hover:to-accent/20 transition-colors"
            >
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all"
                />
            </motion.div>

            {/* Skill Name */}
            <div className="space-y-1">
                <h4 className="font-semibold text-sm text-darkText group-hover:text-accent transition-colors">
                    {skill.name}
                </h4>

                {/* Proficiency Bar */}
                <div className="h-1.5 bg-darkCard rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proficiencyPercentage}%` }}
                        transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent to-highlight rounded-full"
                    />
                </div>
                <p className="text-xs text-darkText/60">{proficiencyPercentage}% proficiency</p>
            </div>
        </motion.div>
    );
};

export default SkillCard;
