import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import { MailCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                {/* Social Links */}
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <a
                        href="https://github.com/rockychowdhury"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition"
                    >
                        <img className='w-12'  src={github} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rockychowdhury1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition"
                    >
                        <img className='w-12' src={linkedin} alt="" />
                    </a>
                    <a
                        href="mailto:rocky20809@gmail.com"
                        className="hover:text-teal-400 transition"
                    >
                        <MailCheck size={36} />
                    </a>
                </div>
                {/* Footer Text */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Rocky Chowdhury. All Rights Reserved.
                </p>
                <p className="text-sm mt-2">
                    Built with <span className="text-teal-400 text-xl">&hearts;</span> using React and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
