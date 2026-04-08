import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import ActivityCalendar from './ActivityCalendar';
import LoadingCard from './LoadingCard';

const LANG_COLORS = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Java: '#007396',
    'C++': '#00599C',
    C: '#A8B9CC',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Shell: '#89E051',
    Vue: '#42B883',
    default: '#00D9FF',
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="card-glass rounded-xl px-3 py-2 text-sm">
                <p className="text-darkText">{payload[0].payload.lang}: {payload[0].value} repos</p>
            </div>
        );
    }
    return null;
};

const GithubSection = ({ data, loading }) => {
    if (loading) return <LoadingCard height="h-64" />;
    if (!data) return null;

    const langData = data.topLanguages.map(l => ({
        ...l,
        fill: LANG_COLORS[l.lang] || LANG_COLORS.default,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-6 space-y-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-darkText">GitHub</h3>
                    <p className="text-sm text-darkText/50">Development Activity</p>
                </div>
                <a
                    href="https://github.com/rockychowdhury"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                >
                    View Profile ↗
                </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { label: 'Public Repos', value: data.publicRepos, color: '#00D9FF' },
                    { label: 'Total Stars', value: data.totalStars, color: '#F59E0B' },
                    { label: 'Followers', value: data.followers, color: '#8B5CF6' },
                    { label: 'Following', value: data.following, color: '#22C55E' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-darkCard/60 rounded-xl p-3 text-center"
                    >
                        <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                        <p className="text-xs text-darkText/50 mt-1">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Language Distribution */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-darkText/70">Top Languages</p>
                    <div className="h-44">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={langData} layout="vertical" margin={{ top: 0, right: 10, bottom: 0, left: 50 }}>
                                <XAxis type="number" tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
                                <YAxis
                                    dataKey="lang"
                                    type="category"
                                    tick={{ fontSize: 11, fill: '#94A3B8' }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={50}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1E293B80' }} />
                                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                                    {langData.map((entry, i) => (
                                        <Cell key={i} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Top Repos */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-darkText/70">Top Repositories</p>
                    <div className="space-y-2">
                        {data.topRepos.map((repo, i) => (
                            <motion.a
                                key={i}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 3 }}
                                className="flex items-center justify-between bg-darkCard/60 rounded-xl px-3 py-2.5 group"
                            >
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-darkText group-hover:text-accent transition-colors truncate">
                                        {repo.name}
                                    </p>
                                    {repo.language && (
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: LANG_COLORS[repo.language] || LANG_COLORS.default }}
                                            />
                                            <span className="text-xs text-darkText/50">{repo.language}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-darkText/50 shrink-0 ml-2">
                                    <span className="flex items-center gap-1">
                                        <Star size={11} />
                                        {repo.stars}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={11} />
                                        {repo.forks}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Activity Calendar */}
            <div className="pt-4 border-t border-darkCard">
                <ActivityCalendar
                    activityMap={data.activityMap}
                    title="Commit Activity"
                    color="#00D9FF"
                />
            </div>
        </motion.div>
    );
};

export default GithubSection;
