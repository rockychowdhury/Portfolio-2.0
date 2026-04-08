import { motion } from 'framer-motion';
import { MailCheck, Linkedin, ArrowRight } from 'lucide-react';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8 p-20'>
            <ScrollAnimationWrapper direction="up">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-accent/20 border border-accent/30 rounded-2xl flex items-center justify-center mx-auto">
                        <MailCheck size={36} className="text-accent" />
                    </div>
                    <h2 className='text-4xl font-bold text-darkText'>Let's Work Together</h2>
                    <p className='text-darkText/60 max-w-md mx-auto'>
                        Have a project in mind? Let's discuss how I can help you build something amazing.
                    </p>
                </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper direction="up">
                <div className='flex flex-wrap gap-4 items-center justify-center'>
                    <motion.a
                        href="mailto:rocky20809@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className='bg-accent text-darkBg flex items-center gap-2 font-semibold px-7 py-3 rounded-full shadow-glow hover:bg-highlight transition-colors'
                    >
                        <MailCheck size={22} />
                        Email Me
                        <ArrowRight size={18} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/rockychowdhury1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className='card-glass border border-darkCard text-darkText flex items-center gap-2 font-semibold px-7 py-3 rounded-full hover:border-accent/40 transition-colors'
                    >
                        <Linkedin size={22} className="text-accent" />
                        LinkedIn
                    </motion.a>
                </div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default Contact;
