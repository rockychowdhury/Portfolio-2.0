import React from 'react';
import SecondaryBg from '../common/SecondaryBg';
import Stack from './Stack';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useIcons } from '../../hooks/useIcons';
const Stacks = () => {
    const icons = useIcons();
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 8,
            spacing: 15,
        },
    });
    return (

        <SecondaryBg>
            <div className='container static py-10 space-y-10'>
                <div >
                    <h1 > <span className='bg-action text-white w-fit px-4 rounded-full text-sm font-semibold'>STACKS</span>/
                        <span className='bg-action text-white w-fit px-4 rounded-full text-sm font-semibold'>TOOLS</span> </h1>
                    <h1 className='font-semibold text-lg'>Technologies I Work With</h1>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {
                        icons.map((icon, idx) => <Stack icon={icon} key={idx}></Stack>)
                    }
                </div>
            </div>
        </SecondaryBg>
    );
};

export default Stacks;