import { SearchCode } from 'lucide-react';
import { useExploreIcons } from '../../hooks/useIcons';
import Icon from './Icon';

const ExplorationTimeline = () => {
    const icons = useExploreIcons();
    return (
        <div className='w-full gap-4 flex '>
            <div className='flex flex-col items-center '>
                <div className='bg-marble border-action_dark border-[3px] w-fit p-1 rounded-full'>
                    <SearchCode size={30

                    } strokeWidth={2} />
                </div>
                <div className='bg-action_dark w-1 h-full '></div>
            </div>
            <div className='p-4 pt-2  w-fit'>
                <h3 className='text-3xl font-semibold'>Exploration Phase</h3>
                <p className='text-sm font-medium font-inter text-marble bg-action w-fit px-4 rounded-full'>June 2024 - July 2024</p>
                <p className='font-semibold text-lg my-2'>Explored advanced concepts and broadened my technical expertise.</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        icons.map((icon, idx) => <Icon icon={icon} key={idx}></Icon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExplorationTimeline;