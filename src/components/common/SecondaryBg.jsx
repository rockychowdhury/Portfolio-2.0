const SecondaryBg = ({ children }) => {
    return (
        <div className='h-fit pb-2 bg-dark-gradient-alt relative overflow-hidden'>
            <div className='absolute inset-0 bg-glow-gradient pointer-events-none'></div>
            <div className='relative z-10 bg-center rounded-b-[100px] border-b border-darkCard'>
                {children}
            </div>
        </div>
    );
};

export default SecondaryBg;
