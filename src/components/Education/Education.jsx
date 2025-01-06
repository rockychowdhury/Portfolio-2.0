import { MapPin, BookMarked, CalendarDays, GraduationCap } from 'lucide-react';
import uni from '../../assets/uni.png'

const Education = () => {
    return (
        <div className='container flex items-center justify-center gap-20 p-20'>
            <img className='w-52' src={uni} alt="" />
            <div className='space-y-4'>
                <div>
                    <h1 className='text-3xl font-medium'>Prime University</h1>
                    <div  className='flex items-center gap-3 font-medium text-sm'>
                        <MapPin size={20} />
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div  className='flex items-center gap-3 font-medium'>
                    <GraduationCap size={20} />
                    <p>BSc in CSE</p>
                </div>
                <div className='flex items-center gap-3 font-semibold'>
                    <BookMarked size={20} />
                    <p>Computer Science And Engineering (CSE)</p>
                </div>
                <div  className='flex items-center gap-3 font-medium'>
                    <CalendarDays size={20} />
                    <p>1st July 2022 - 30th July 2026</p>
                </div>
                <div  className='flex items-center gap-3 font-medium'>
                    <GraduationCap size={20} />
                    <p>CGPA : 3.50</p>
                </div>
            </div>
        </div>
    );
};

export default Education;