import { motion } from 'framer-motion';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, ReferenceLine, Area, AreaChart,
} from 'recharts';
import ActivityCalendar from './ActivityCalendar';
import LoadingCard from './LoadingCard';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="card-glass rounded-xl px-4 py-3 text-sm shadow-glow">
                <p className="text-darkText/60 text-xs">{payload[0]?.payload?.date}</p>
                <p className="text-accent font-bold text-base">{payload[0].value}</p>
                <p className="text-darkText/50 text-xs">{label}</p>
            </div>
        );
    }
    return null;
};

const getRankColor = (rating) => {
    if (rating < 1200) return '#808080';
    if (rating < 1400) return '#008000';
    if (rating < 1600) return '#03A89E';
    if (rating < 1900) return '#0000FF';
    if (rating < 2100) return '#AA00AA';
    if (rating < 2400) return '#FF8C00';
    return '#FF0000';
};

const TagBadge = ({ tag, count }) => (
    <div className="flex items-center gap-2 bg-darkCard/60 rounded-lg px-3 py-2">
        <span className="text-xs text-darkText/80 capitalize">{tag}</span>
        <span className="text-xs font-bold text-accent">{count}</span>
    </div>
);

const CodeforcesSection = ({ data, loading }) => {
    if (loading) return <LoadingCard height="h-64" />;
    if (!data) return null;

    const currentRating = data.info.rating;
    const maxRating = data.info.maxRating;
    const ratingColor = getRankColor(currentRating);

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
                    <h3 className="text-xl font-bold text-darkText">Codeforces</h3>
                    <p className="text-sm text-darkText/50">Competitive Programming</p>
                </div>
                <a
                    href="https://codeforces.com/profile/__Cipher__"
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
                    { label: 'Current Rating', value: currentRating, color: ratingColor },
                    { label: 'Max Rating', value: maxRating, color: getRankColor(maxRating) },
                    { label: 'Problems Solved', value: data.problemsSolved, color: '#00D9FF' },
                    { label: 'Total Submissions', value: data.totalSubmissions, color: '#8B5CF6' },
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

            {/* Rating History Chart */}
            {data.ratingHistory.length > 0 && (
                <div className="space-y-2">
                    <p className="text-sm font-medium text-darkText/70">Rating History</p>
                    <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data.ratingHistory} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                                <defs>
                                    <linearGradient id="cfGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1890FF" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#1890FF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                                <XAxis
                                    dataKey="date"
                                    tick={{ fontSize: 10, fill: '#64748B' }}
                                    tickLine={false}
                                    axisLine={false}
                                    interval="preserveStartEnd"
                                />
                                <YAxis
                                    tick={{ fontSize: 10, fill: '#64748B' }}
                                    tickLine={false}
                                    axisLine={false}
                                    domain={['auto', 'auto']}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <ReferenceLine y={1200} stroke="#808080" strokeDasharray="3 3" strokeOpacity={0.4} />
                                <ReferenceLine y={1400} stroke="#008000" strokeDasharray="3 3" strokeOpacity={0.4} />
                                <Area
                                    type="monotone"
                                    dataKey="rating"
                                    stroke="#1890FF"
                                    strokeWidth={2}
                                    fill="url(#cfGradient)"
                                    dot={{ fill: '#1890FF', r: 3, strokeWidth: 0 }}
                                    activeDot={{ r: 5, fill: '#00D9FF' }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex gap-4 text-xs text-darkText/40">
                        <span>— — Pupil (1200)</span>
                        <span>— — Specialist (1400)</span>
                    </div>
                </div>
            )}

            {/* Top Problem Tags */}
            {data.topTags.length > 0 && (
                <div className="space-y-2">
                    <p className="text-sm font-medium text-darkText/70">Strongest Topics</p>
                    <div className="flex flex-wrap gap-2">
                        {data.topTags.map((t, i) => (
                            <TagBadge key={i} tag={t.tag} count={t.count} />
                        ))}
                    </div>
                </div>
            )}

            {/* Activity Calendar */}
            <div className="pt-4 border-t border-darkCard">
                <ActivityCalendar
                    activityMap={data.activityMap}
                    title="Submission Activity"
                    color="#1890FF"
                />
            </div>
        </motion.div>
    );
};

export default CodeforcesSection;
