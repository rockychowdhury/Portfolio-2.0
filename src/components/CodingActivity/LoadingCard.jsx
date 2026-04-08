const LoadingCard = ({ height = 'h-40', className = '' }) => (
    <div className={`card-glass rounded-2xl ${height} ${className} overflow-hidden relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        <div className="p-6 space-y-3">
            <div className="h-4 bg-darkCard/60 rounded-full w-1/3 animate-pulse" />
            <div className="h-8 bg-darkCard/60 rounded-full w-1/2 animate-pulse" />
            <div className="h-4 bg-darkCard/60 rounded-full w-2/3 animate-pulse" />
        </div>
    </div>
);

export default LoadingCard;
