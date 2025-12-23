import React from 'react';
import SecondaryBg from '../common/SecondaryBg';
import Stack from './Stack';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useIcons } from '../../hooks/useIcons';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';

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
                <ScrollAnimationWrapper direction="up">
                    <div className='space-y-3'>
                        <h1 className='flex gap-2'> 
                            <span className='bg-accent text-darkBg w-fit px-4 rounded-full text-sm font-semibold'>STACKS</span>
                            <span className='text-darkText'>/</span>
                            <span className='bg-accent text-darkBg w-fit px-4 rounded-full text-sm font-semibold'>TOOLS</span> 
                        </h1>
                        <h2 className='font-semibold text-lg text-darkText'>Technologies I Work With</h2>
                    </div>
                </ScrollAnimationWrapper>
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