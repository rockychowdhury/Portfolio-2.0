import { useMemo } from 'react';

const ActivityCalendar = ({ activityMap = {}, title = 'Activity', color = '#00D9FF' }) => {
    const { weeks, monthLabels } = useMemo(() => {
        const today = new Date();
        const weeks = [];
        const monthLabels = [];
        const seenMonths = new Set();

        for (let w = 51; w >= 0; w--) {
            const week = [];
            for (let d = 6; d >= 0; d--) {
                const date = new Date(today);
                date.setDate(date.getDate() - (w * 7 + d));
                const dateStr = date.toISOString().split('T')[0];
                const count = activityMap[dateStr] || 0;
                const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
                if (!seenMonths.has(monthKey) && d === 6) {
                    seenMonths.add(monthKey);
                    monthLabels.push({
                        label: date.toLocaleDateString('en-US', { month: 'short' }),
                        weekIndex: 51 - w,
                    });
                }
                week.push({ date: dateStr, count });
            }
            weeks.push(week);
        }
        return { weeks, monthLabels };
    }, [activityMap]);

    const maxCount = Math.max(...Object.values(activityMap), 1);

    const getOpacity = (count) => {
        if (count === 0) return 0;
        return Math.max(0.15, Math.min(1, count / maxCount));
    };

    const totalContributions = Object.values(activityMap).reduce((s, v) => s + v, 0);

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm text-darkText/60">{title}</span>
                <span className="text-sm text-accent font-medium">{totalContributions} contributions in last year</span>
            </div>
            <div className="overflow-x-auto">
                <div className="min-w-max">
                    <div className="flex gap-[3px] mb-1 pl-2" style={{ marginLeft: '0px' }}>
                        {monthLabels.map((m, i) => (
                            <span
                                key={i}
                                className="text-[10px] text-darkText/40"
                                style={{ position: 'relative', left: `${m.weekIndex * 11}px`, marginLeft: i === 0 ? 0 : -8 }}
                            >
                                {m.label}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-[3px]">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="flex flex-col gap-[3px]">
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        title={`${day.date}: ${day.count} activities`}
                                        className="w-[10px] h-[10px] rounded-[2px] transition-all duration-200 hover:scale-125 cursor-pointer"
                                        style={{
                                            backgroundColor: day.count > 0 ? color : '#1E293B',
                                            opacity: day.count > 0 ? getOpacity(day.count) : 1,
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-darkText/40">Less</span>
                {[0.15, 0.35, 0.55, 0.75, 1].map((op, i) => (
                    <div
                        key={i}
                        className="w-[10px] h-[10px] rounded-[2px]"
                        style={{ backgroundColor: i === 0 ? '#1E293B' : color, opacity: i === 0 ? 1 : op }}
                    />
                ))}
                <span className="text-xs text-darkText/40">More</span>
            </div>
        </div>
    );
};

export default ActivityCalendar;
