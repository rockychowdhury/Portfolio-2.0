import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import ActivityCalendar from './ActivityCalendar';
import LoadingCard from './LoadingCard';

const DifficultyBar = ({ label, solved, total, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-1.5"
    >
        <div className="flex justify-between text-sm">
            <span className="font-medium" style={{ color }}>{label}</span>
            <span className="text-darkText/60">{solved}/{total}</span>
        </div>
        <div className="h-2 bg-darkCard rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${total > 0 ? (solved / total) * 100 : 0}%` }}
                transition={{ delay: delay + 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
            />
        </div>
    </motion.div>
);

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="card-glass rounded-xl px-4 py-2 text-sm">
                <p style={{ color: payload[0].payload.color }}>{payload[0].name}: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

const LeetCodeSection = ({ data, loading }) => {
    if (loading) return <LoadingCard height="h-64" />;
    if (!data) return null;

    const pieData = [
        { name: 'Easy', value: data.easySolved, color: '#22C55E' },
        { name: 'Medium', value: data.mediumSolved, color: '#F59E0B' },
        { name: 'Hard', value: data.hardSolved || 0, color: '#EF4444' },
    ];

    const progressPct = Math.round((data.totalSolved / data.totalQuestions) * 100);

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
                    <h3 className="text-xl font-bold text-darkText">LeetCode</h3>
                    <p className="text-sm text-darkText/50">Problem Solving Stats</p>
                </div>
                <a
                    href="https://leetcode.com/u/Rocky20809/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                >
                    View Profile ↗
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Donut Chart */}
                <div className="flex flex-col items-center space-y-2">
                    <div className="relative h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={58}
                                    outerRadius={80}
                                    paddingAngle={3}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, i) => (
                                        <Cell key={i} fill={entry.color} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-darkText">{data.totalSolved}</span>
                            <span className="text-xs text-darkText/50">Solved</span>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xs">
                        {pieData.map(p => (
                            <div key={p.name} className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                                <span className="text-darkText/70">{p.name}: {p.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-darkCard/60 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-accent">{data.acceptanceRate}%</p>
                            <p className="text-xs text-darkText/50">Acceptance</p>
                        </div>
                        <div className="bg-darkCard/60 rounded-xl p-3 text-center">
                            <p className="text-lg font-bold text-accent">#{data.ranking?.toLocaleString()}</p>
                            <p className="text-xs text-darkText/50">Global Rank</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <DifficultyBar label="Easy" solved={data.easySolved} total={data.totalEasy} color="#22C55E" delay={0} />
                        <DifficultyBar label="Medium" solved={data.mediumSolved} total={data.totalMedium} color="#F59E0B" delay={0.1} />
                        <DifficultyBar label="Hard" solved={data.hardSolved} total={data.totalHard} color="#EF4444" delay={0.2} />
                    </div>
                </div>
            </div>

            {/* Activity Calendar */}
            <div className="pt-4 border-t border-darkCard">
                <ActivityCalendar
                    activityMap={data.activityMap}
                    title="Submission Activity"
                    color="#FFA116"
                />
            </div>
        </motion.div>
    );
};

export default LeetCodeSection;
