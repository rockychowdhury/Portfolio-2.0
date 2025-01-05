import { ServerCog } from 'lucide-react';
import { useBackendIcons } from '../../hooks/useIcons';
import Icon from './Icon';

const BackendTimeline = () => {
    const icons = useBackendIcons();
    return (
        <div className='w-full gap-4 flex '>
            <div className='flex flex-col items-center '>
                <div className='bg-marble border-action_dark border-[3px] w-fit p-1 rounded-full'>
                    <ServerCog size={30} strokeWidth={2} />
                </div>
                <div className='bg-action_dark w-1 h-full '></div>
            </div>
            <div className='p-4 pt-2 w-fit'>
                <h3 className='text-3xl font-semibold'>Backend Development</h3>
                <p className='text-sm font-medium font-inter text-marble bg-action w-fit px-4 rounded-full'>Jun 2024 - July 2024</p>
                <p className='font-semibold text-lg my-2'>Focused on building secure, scalable systems and tested real-world functionalities.</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        icons.map((icon, idx) => <Icon icon={icon} key={idx}></Icon>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BackendTimeline;