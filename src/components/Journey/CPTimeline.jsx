import { CodeXml } from 'lucide-react';
import Icon from './Icon';
import { useCPIcons } from '../../hooks/useIcons';

const CPTimeline = () => {
    const icons = useCPIcons();
    return (
        <div className='w-full gap-4 flex '>
            <div className='flex flex-col items-center '>
                <div className='bg-marble border-action_dark border-[3px] w-fit p-1 rounded-full'>
                    <CodeXml size={30} strokeWidth={2} />
                </div>
                <div className='bg-action_dark w-1 h-full '></div>
            </div>
            <div className='p-4 pt-2  w-fit'>
                <h3 className='text-3xl font-semibold'>Competitive Programming</h3>
                <p className='text-sm font-medium font-inter text-marble bg-action w-fit px-4 rounded-full'>Jun 2024 - July 2024</p>
                <p className='font-semibold text-lg my-2'>Sharpened problem-solving skills and achieved significant milestones in coding contests.</p>
                <ul className='list-disc ps-5 space-y-2 text-lg'>
                    <li>Solved over 500 problems across platforms, sharpening problem-solving skills.</li>
                    <li>Achieved 2-star coder status on CodeChef with a 1592 rating.</li>
                    <li>Reached a 1092 rating on Codeforces, showcasing consistent performance in contests.</li>
                </ul>
                <div className='flex flex-wrap gap-2'>

                    {
                        icons.map((icon, idx) => <Icon icon={icon} key={idx}></Icon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CPTimeline;