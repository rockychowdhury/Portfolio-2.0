const PrimaryBG = ({ children }) => {
    return (
        <div className='h-fit bg-dark-gradient relative overflow-hidden'>
            <div className='absolute inset-0 bg-glow-gradient pointer-events-none'></div>
            <div className='relative z-10'>
                {children}
            </div>
        </div>
    );
};

export default PrimaryBG;