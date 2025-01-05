import profile from '../../assets/profile.jpg'
import SocialLinks from '../common/SocialLinks';
const HeroSection = () => {
    return (
        <div className='py-20 flex flex-col items-center space-y-3 justify-between'>
            <figure className='relative w-fit'>
                <img className='rounded-full' src={profile} alt="" />
                <h1 className='bg-marble w-fit px-5 py-1 font-semibold rounded-full -right-32 top-24 -rotate-6 absolute'>Rocky Chowdhury</h1>
            </figure>
            <h2 className='font-bold text-4xl'>A Full-Stack Developer</h2>
            <h4>I'm always eager to expand my skill set and stay current with the latest technology</h4>
            <h1 className='bg-action px-4 rounded-full text-marble font-logo'>&quot;- With Small Steps, I Will Go Very Far_&quot;</h1>
            <SocialLinks/>
        </div>
    );
};

export default HeroSection;