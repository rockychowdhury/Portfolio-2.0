import leetcode from '../../assets/lettcode.png'
import codechef from '../../assets/codechef.png'
import codeforces from '../../assets/codeforces.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
const SocialLinks = () => {
    return (
        <div className='flex gap-6'>
            <a href="https://github.com/rockychowdhury" target='_blank' >
                <img className='w-8 hover:scale-110 transition transform hover:shadow-sm' src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/rockychowdhury1/" target='_blank'>
                <img className='w-8 hover:scale-110 transition transform hover:shadow-sm' src={linkedin} alt="github" />
            </a>
            <a href="https://leetcode.com/u/Rocky20809/" target='_blank'>
                <img className='w-8 hover:scale-110 transition transform hover:shadow-sm' src={leetcode} alt="github" />
            </a>
            <a href="https://codeforces.com/profile/__Cipher__">
                <img className='w-8 hover:scale-110 transition transform hover:shadow-sm' src={codeforces} alt="github" />
            </a>
            <a href="https://www.codechef.com/users/rocky20809" target='_blank'>
                <img className='w-8 hover:scale-110 transition transform hover:shadow-sm' src={codechef} alt="github" />
            </a>
        </div>
    );
};

export default SocialLinks;