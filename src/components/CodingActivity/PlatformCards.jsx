import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Code2, Star, GitFork } from 'lucide-react';
import leetcodeImg from '../../assets/lettcode.png';
import codeforcesImg from '../../assets/codeforces.png';
import codechefImg from '../../assets/codechef.png';
import githubImg from '../../assets/github.png';
import LoadingCard from './LoadingCard';

const PlatformBadge = ({ label, value, icon: Icon }) => (
    <div className="text-center">
        <p className="text-2xl font-bold text-darkText">{value ?? '—'}</p>
        <p className="text-xs text-darkText/50 mt-0.5">{label}</p>
    </div>
);

const Card = ({ children, href, delay = 0, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="card-glass rounded-2xl p-5 space-y-4 block relative overflow-hidden group"
        style={{ borderTop: `2px solid ${color}20` }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle at 50% 0%, ${color}08, transparent 60%)` }}
        />
        {children}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={14} className="text-darkText/40" />
        </div>
    </motion.a>
);

const PlatformCards = ({ codeforces, leetcode, github, loading, errors }) => {
    const cfColor = '#1890FF';
    const lcColor = '#FFA116';
    const ghColor = '#00D9FF';
    const ccColor = '#5B4638';

    const getRankColor = (rank) => {
        if (!rank) return '#6B7280';
        rank = rank.toLowerCase();
        if (rank.includes('newbie')) return '#808080';
        if (rank.includes('pupil')) return '#008000';
        if (rank.includes('specialist')) return '#03A89E';
        if (rank.includes('expert')) return '#0000FF';
        if (rank.includes('candidate master')) return '#AA00AA';
        if (rank.includes('master')) return '#FF8C00';
        if (rank.includes('grandmaster')) return '#FF0000';
        return '#808080';
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Codeforces */}
            {loading.codeforces ? (
                <LoadingCard height="h-44" />
            ) : (
                <Card href="https://codeforces.com/profile/__Cipher__" delay={0} color={cfColor}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-darkCard flex items-center justify-center overflow-hidden">
                            <img src={codeforcesImg} alt="Codeforces" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-darkText text-sm">Codeforces</h4>
                            <span
                                className="text-xs font-medium capitalize"
                                style={{ color: getRankColor(codeforces?.info?.rank) }}
                            >
                                {codeforces?.info?.rank || 'unrated'}
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-darkCard">
                        <PlatformBadge label="Rating" value={codeforces?.info?.rating} />
                        <PlatformBadge label="Max" value={codeforces?.info?.maxRating} />
                        <PlatformBadge label="Solved" value={codeforces?.problemsSolved} />
                    </div>
                </Card>
            )}

            {/* LeetCode */}
            {loading.leetcode ? (
                <LoadingCard height="h-44" />
            ) : (
                <Card href="https://leetcode.com/u/Rocky20809/" delay={0.05} color={lcColor}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-darkCard flex items-center justify-center overflow-hidden">
                            <img src={leetcodeImg} alt="LeetCode" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-darkText text-sm">LeetCode</h4>
                            <span className="text-xs text-darkText/50">#{leetcode?.ranking?.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-darkCard">
                        <PlatformBadge label="Solved" value={leetcode?.totalSolved} />
                        <PlatformBadge label="Easy" value={leetcode?.easySolved} />
                        <PlatformBadge label="Medium" value={leetcode?.mediumSolved} />
                    </div>
                </Card>
            )}

            {/* GitHub */}
            {loading.github ? (
                <LoadingCard height="h-44" />
            ) : (
                <Card href="https://github.com/rockychowdhury" delay={0.1} color={ghColor}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-darkCard flex items-center justify-center overflow-hidden">
                            <img src={githubImg} alt="GitHub" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-darkText text-sm">GitHub</h4>
                            <span className="text-xs text-darkText/50">Since {github?.memberSince}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-darkCard">
                        <PlatformBadge label="Repos" value={github?.publicRepos} />
                        <PlatformBadge label="Stars" value={github?.totalStars} />
                        <PlatformBadge label="Followers" value={github?.followers} />
                    </div>
                </Card>
            )}

            {/* CodeChef */}
            <Card href="https://www.codechef.com/users/rocky20809" delay={0.15} color={ccColor}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-darkCard flex items-center justify-center overflow-hidden">
                        <img src={codechefImg} alt="CodeChef" className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-darkText text-sm">CodeChef</h4>
                        <div className="flex gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-3 h-3" viewBox="0 0 24 24" fill={i <= 2 ? '#FFA116' : '#334155'}>
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-darkCard">
                    <PlatformBadge label="Div" value="3" />
                    <PlatformBadge label="Handle" value="rocky" />
                    <PlatformBadge label="Profile" value="↗" />
                </div>
            </Card>
        </div>
    );
};

export default PlatformCards;
