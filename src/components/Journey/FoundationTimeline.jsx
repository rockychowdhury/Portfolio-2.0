
import { Wrench } from 'lucide-react';
import { useFoundationIcons } from '../../hooks/useIcons';
import Icon from './Icon';

const FoundationTimeline = () => {
    const icons = useFoundationIcons();
    return (
        <div className='w-full gap-4 flex '>
            <div className='flex flex-col items-center '>
                <div className='bg-marble border-action_dark border-[3px] w-fit p-1 rounded-full'>
                <Wrench size={30} strokeWidth={2} />
                </div>
                <div className='bg-action_dark w-1 h-full '></div>
            </div>
            <div className='p-4 pt-2  w-fit'>
                <h3 className='text-3xl font-semibold'>Foundation Phase</h3>
                <p className='text-sm font-medium font-inter text-marble bg-action w-fit px-4 rounded-full'>Jun 2024 - July 2024</p>
                <p className='font-semibold text-lg my-2'>Built a strong coding foundation and learned to solve problems logically.</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        icons.map((icon, idx) => <Icon icon={icon} key={idx}></Icon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoundationTimeline;