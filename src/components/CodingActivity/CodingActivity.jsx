import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, TrendingUp, Github, Clock } from 'lucide-react';
import useCodingStats from '../../hooks/useCodingStats';
import ScrollAnimationWrapper from '../common/ScrollAnimationWrapper';
import PlatformCards from './PlatformCards';
import LeetCodeSection from './LeetCodeSection';
import CodeforcesSection from './CodeforcesSection';
import GithubSection from './GithubSection';
import WakatimeSection from './WakatimeSection';

const TAB_LIST = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'cp', label: 'Competitive', icon: Code2 },
    { id: 'github', label: 'GitHub', icon: Github },
    { id: 'wakatime', label: 'WakaTime', icon: Clock },
];

const SectionTitle = ({ title, subtitle }) => (
    <ScrollAnimationWrapper direction="up">
        <div className="space-y-2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-darkText">{title}</h2>
            <p className="text-darkText/60 text-lg">{subtitle}</p>
        </div>
    </ScrollAnimationWrapper>
);

const CodingActivity = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const { codeforces, leetcode, github, wakatime, loading, errors } = useCodingStats();

    return (
        <div className="bg-darkBg py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 space-y-12">
                {/* Section Header */}
                <SectionTitle
                    title="Coding Activity"
                    subtitle="Live stats from competitive programming, open source & development"
                />

                {/* Platform Cards */}
                <ScrollAnimationWrapper direction="up">
                    <PlatformCards
                        codeforces={codeforces}
                        leetcode={leetcode}
                        github={github}
                        loading={loading}
                        errors={errors}
                    />
                </ScrollAnimationWrapper>

                {/* Tabs */}
                <ScrollAnimationWrapper direction="up">
                    <div className="flex items-center gap-2 bg-darkCard/40 rounded-2xl p-1.5 w-fit mx-auto backdrop-blur-sm border border-darkCard">
                        {TAB_LIST.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-accent text-darkBg shadow-glow'
                                        : 'text-darkText/60 hover:text-darkText hover:bg-darkCard/60'
                                }`}
                            >
                                <tab.icon size={15} />
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </ScrollAnimationWrapper>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <LeetCodeSection data={leetcode} loading={loading.leetcode} />
                                <CodeforcesSection data={codeforces} loading={loading.codeforces} />
                            </div>
                            <GithubSection data={github} loading={loading.github} />
                        </motion.div>
                    )}

                    {activeTab === 'cp' && (
                        <motion.div
                            key="cp"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <LeetCodeSection data={leetcode} loading={loading.leetcode} />
                            <CodeforcesSection data={codeforces} loading={loading.codeforces} />

                            {/* CP Profile Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="card-glass rounded-2xl p-6 space-y-4"
                            >
                                <h3 className="text-lg font-bold text-darkText">All Competitive Programming Profiles</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                    {[
                                        {
                                            name: 'Codeforces',
                                            handle: '__Cipher__',
                                            url: 'https://codeforces.com/profile/__Cipher__',
                                            rating: codeforces?.info?.rating,
                                            rank: codeforces?.info?.rank,
                                            color: '#1890FF',
                                        },
                                        {
                                            name: 'LeetCode',
                                            handle: 'Rocky20809',
                                            url: 'https://leetcode.com/u/Rocky20809/',
                                            rating: `${leetcode?.totalSolved} solved`,
                                            rank: `#${leetcode?.ranking?.toLocaleString()}`,
                                            color: '#FFA116',
                                        },
                                        {
                                            name: 'CodeChef',
                                            handle: 'rocky20809',
                                            url: 'https://www.codechef.com/users/rocky20809',
                                            rating: 'Div 3',
                                            rank: '2★',
                                            color: '#5B4638',
                                        },
                                        {
                                            name: 'Codolio',
                                            handle: 'Rocky',
                                            url: 'https://codolio.com/profile/Rocky',
                                            rating: 'Portfolio',
                                            rank: 'Aggregated',
                                            color: '#8B5CF6',
                                        },
                                    ].map((p, i) => (
                                        <motion.a
                                            key={i}
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.07 }}
                                            whileHover={{ y: -3 }}
                                            className="bg-darkCard/60 rounded-xl p-4 space-y-2 group"
                                            style={{ borderLeft: `3px solid ${p.color}` }}
                                        >
                                            <p className="font-semibold text-darkText group-hover:text-accent transition-colors">{p.name}</p>
                                            <p className="text-xs text-darkText/50">@{p.handle}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="text-xs font-medium" style={{ color: p.color }}>{p.rating}</span>
                                                <span className="text-xs text-darkText/40">{p.rank}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'github' && (
                        <motion.div
                            key="github"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GithubSection data={github} loading={loading.github} />
                        </motion.div>
                    )}

                    {activeTab === 'wakatime' && (
                        <motion.div
                            key="wakatime"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <WakatimeSection
                                data={wakatime}
                                loading={loading.wakatime}
                                error={errors.wakatime}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CodingActivity;
