import { motion } from 'framer-motion';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Terminal, Zap, Settings } from 'lucide-react';
import LoadingCard from './LoadingCard';

const LANG_COLORS = {
    Python: '#3776AB',
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    HTML: '#E34F26',
    CSS: '#1572B6',
    'C++': '#00599C',
    C: '#A8B9CC',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Shell: '#89E051',
    default: '#00D9FF',
};

const SetupPrompt = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card-glass rounded-2xl p-8 space-y-6"
    >
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-accent" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-darkText">WakaTime</h3>
                <p className="text-sm text-darkText/50">Coding Activity Tracker</p>
            </div>
        </div>

        <div className="bg-darkCard/60 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-accent">
                <Settings size={16} />
                <span className="text-sm font-medium">Connect WakaTime to see live coding stats</span>
            </div>
            <ol className="text-sm text-darkText/60 space-y-1.5 list-decimal list-inside">
                <li>Go to <a href="https://wakatime.com/settings/api-key" target="_blank" className="text-accent hover:underline">wakatime.com/settings/api-key</a></li>
                <li>Copy your API key</li>
                <li>Add <code className="bg-darkBg px-1.5 py-0.5 rounded text-accent text-xs">VITE_WAKATIME_API_KEY=your_key</code> to your .env file</li>
            </ol>
        </div>

        <div className="grid grid-cols-3 gap-3 opacity-40 pointer-events-none">
            {['Python 60%', 'JavaScript 20%', 'TypeScript 15%'].map((lang, i) => (
                <div key={i} className="bg-darkCard rounded-lg p-3 text-center">
                    <div className="h-3 bg-accent/30 rounded-full mx-auto w-3/4 mb-2" />
                    <span className="text-xs text-darkText/50">{lang}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="card-glass rounded-xl px-3 py-2 text-sm">
                <p className="text-darkText">{payload[0].payload.name}: {payload[0].payload.text}</p>
            </div>
        );
    }
    return null;
};

const WakatimeSection = ({ data, loading, error }) => {
    if (!import.meta.env.VITE_WAKATIME_API_KEY) return <SetupPrompt />;
    if (loading) return <LoadingCard height="h-64" />;
    if (error || !data) return <SetupPrompt />;

    const langData = data.languages.map(l => ({
        ...l,
        fill: LANG_COLORS[l.name] || LANG_COLORS.default,
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
                    <h3 className="text-xl font-bold text-darkText">WakaTime</h3>
                    <p className="text-sm text-darkText/50">Last 7 days coding activity</p>
                </div>
                <a
                    href="https://wakatime.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                >
                    View Dashboard ↗
                </a>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                    { icon: Clock, label: 'Total Coding', value: data.humanReadableTotal, color: '#00D9FF' },
                    { icon: Zap, label: 'Daily Average', value: data.dailyAverage, color: '#8B5CF6' },
                    { icon: Terminal, label: 'Top Language', value: data.languages[0]?.name || '—', color: '#22C55E' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07 }}
                        viewport={{ once: true }}
                        className="bg-darkCard/60 rounded-xl p-4 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                            <stat.icon size={18} style={{ color: stat.color }} />
                        </div>
                        <div>
                            <p className="font-bold text-darkText">{stat.value}</p>
                            <p className="text-xs text-darkText/50">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Language Chart */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-darkText/70">Languages Used</p>
                    <div className="h-44">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={langData} layout="vertical" margin={{ top: 0, right: 10, bottom: 0, left: 60 }}>
                                <XAxis type="number" tick={{ fontSize: 10, fill: '#64748B' }} unit="%" axisLine={false} tickLine={false} />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tick={{ fontSize: 11, fill: '#94A3B8' }}
                                    axisLine={false}
                                    tickLine={false}
                                    width={60}
                                />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1E293B80' }} />
                                <Bar dataKey="percent" radius={[0, 4, 4, 0]}>
                                    {langData.map((entry, i) => (
                                        <Cell key={i} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Projects */}
                {data.projects.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-darkText/70">Recent Projects</p>
                        <div className="space-y-2">
                            {data.projects.map((p, i) => (
                                <div key={i} className="flex items-center justify-between bg-darkCard/60 rounded-lg px-3 py-2">
                                    <span className="text-sm text-darkText truncate">{p.name}</span>
                                    <span className="text-xs text-accent font-medium shrink-0 ml-2">{p.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default WakatimeSection;
