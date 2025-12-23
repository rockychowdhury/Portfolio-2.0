const InvertedSecondaryBg = ({ children }) => {
    return (
        <div className='h-fit bg-dark-gradient relative overflow-hidden'>
            <div className='absolute inset-0 bg-glow-gradient pointer-events-none'></div>
            <div className='relative z-10 bg-center rounded-[100px] border border-darkCard'>
                {children}
            </div>
        </div>
    );
};

export default InvertedSecondaryBg;