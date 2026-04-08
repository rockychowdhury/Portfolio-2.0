import { MapPin, BookMarked, CalendarDays, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import uni from '../../assets/uni.png';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const Education = () => {
    return (
        <div className='container p-10'>
            <ScrollAnimationWrapper direction="up">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-accent/30"></div>
                    <span className="shrink-0 px-6 bg-accent/20 border border-accent/50 py-2 text-accent rounded-full font-medium text-lg">Education</span>
                    <div className="h-px flex-1 bg-accent/30"></div>
                </div>
            </ScrollAnimationWrapper>

            <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20'>
                <ScrollAnimationWrapper direction="left">
                    <motion.img
                        className='w-40 md:w-52 opacity-80 hover:opacity-100 transition-opacity'
                        src={uni}
                        alt="Prime University"
                        whileHover={{ scale: 1.05 }}
                    />
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper direction="right">
                    <div className='space-y-4'>
                        <div>
                            <h1 className='text-3xl font-bold text-darkText'>Prime University</h1>
                            <div className='flex items-center gap-2 font-medium text-sm text-darkText/60 mt-1'>
                                <MapPin size={16} className="text-accent" />
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        {[
                            { icon: GraduationCap, text: 'BSc in Computer Science & Engineering' },
                            { icon: BookMarked, text: 'CGPA: 3.50 / 4.00' },
                            { icon: CalendarDays, text: '1st July 2022 – 30th July 2026' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className='flex items-center gap-3 text-darkText/80'
                            >
                                <item.icon size={18} className="text-accent shrink-0" />
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Education;