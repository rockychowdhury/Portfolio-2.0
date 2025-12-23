import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import { MailCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darkBg border-t border-darkCard py-6">
            <div className="container mx-auto text-center">
                {/* Social Links */}
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <a
                        href="https://github.com/rockychowdhury"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition hover:scale-110"
                    >
                        <img className='w-12 hover:drop-shadow-lg'  src={github} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rockychowdhury1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition hover:scale-110"
                    >
                        <img className='w-12 hover:drop-shadow-lg' src={linkedin} alt="" />
                    </a>
                    <a
                        href="mailto:rocky20809@gmail.com"
                        className="hover:text-accent transition hover:scale-110"
                    >
                        <MailCheck size={36} className="text-accent" />
                    </a>
                </div>
                {/* Footer Text */}
                <p className="text-sm text-darkText/70">
                    &copy; {new Date().getFullYear()} Rocky Chowdhury. All Rights Reserved.
                </p>
                <p className="text-sm mt-2 text-darkText/70">
                    Built with <span className="text-accent text-xl">&hearts;</span> using React and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
