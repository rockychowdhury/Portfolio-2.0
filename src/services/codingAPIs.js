const GITHUB_USERNAME = 'rockychowdhury';
const CODEFORCES_HANDLE = '__Cipher__';
const LEETCODE_USERNAME = 'Rocky20809';
const WAKATIME_API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;
const WAKATIME_USERNAME = import.meta.env.VITE_WAKATIME_USERNAME || 'Rocky20809';

export const fetchCodeforcesData = async () => {
    const [userRes, ratingRes, statusRes] = await Promise.all([
        fetch(`https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`),
        fetch(`https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`),
        fetch(`https://codeforces.com/api/user.status?handle=${CODEFORCES_HANDLE}&from=1&count=500`),
    ]);

    const [userData, ratingData, statusData] = await Promise.all([
        userRes.json(),
        ratingRes.json(),
        statusRes.json(),
    ]);

    const info = userData.result[0];
    const ratingHistory = ratingData.result || [];
    const submissions = statusData.result || [];

    const solved = new Set(
        submissions
            .filter(s => s.verdict === 'OK')
            .map(s => `${s.problem.contestId}-${s.problem.index}`)
    );

    const tagCount = {};
    submissions
        .filter(s => s.verdict === 'OK')
        .forEach(s => {
            s.problem.tags?.forEach(tag => {
                tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
        });

    const topTags = Object.entries(tagCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([tag, count]) => ({ tag, count }));

    const activityMap = {};
    submissions.forEach(s => {
        const date = new Date(s.creationTimeSeconds * 1000).toISOString().split('T')[0];
        activityMap[date] = (activityMap[date] || 0) + 1;
    });

    return {
        info,
        ratingHistory: ratingHistory.map(r => ({
            contest: r.contestName.replace(/Codeforces |Round |Educational /g, '').substring(0, 20),
            rating: r.newRating,
            date: new Date(r.ratingUpdateTimeSeconds * 1000).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
        })),
        problemsSolved: solved.size,
        topTags,
        activityMap,
        totalSubmissions: submissions.length,
    };
};

export const fetchLeetCodeData = async () => {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
    if (!res.ok) throw new Error('LeetCode API unavailable');
    const data = await res.json();

    const calendarEntries = Object.entries(data.submissionCalendar || {});
    const activityMap = {};
    calendarEntries.forEach(([ts, count]) => {
        const date = new Date(parseInt(ts) * 1000).toISOString().split('T')[0];
        activityMap[date] = count;
    });

    return {
        totalSolved: data.totalSolved,
        totalQuestions: data.totalQuestions,
        easySolved: data.easySolved,
        totalEasy: data.totalEasy,
        mediumSolved: data.mediumSolved,
        totalMedium: data.totalMedium,
        hardSolved: data.hardSolved,
        totalHard: data.totalHard,
        acceptanceRate: data.acceptanceRate,
        ranking: data.ranking,
        activityMap,
        profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    };
};

export const fetchGithubData = async () => {
    const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`),
    ]);

    const [user, repos, events] = await Promise.all([
        userRes.json(),
        reposRes.json(),
        eventsRes.json(),
    ]);

    const langCount = {};
    repos.forEach(r => {
        if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    });

    const topLanguages = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([lang, count]) => ({ lang, count }));

    const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);

    const activityMap = {};
    events.forEach(e => {
        if (e.type === 'PushEvent') {
            const date = e.created_at.split('T')[0];
            const commits = e.payload?.commits?.length || 0;
            activityMap[date] = (activityMap[date] || 0) + commits;
        }
    });

    const topRepos = repos
        .filter(r => !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4)
        .map(r => ({
            name: r.name,
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language,
            url: r.html_url,
            description: r.description,
        }));

    return {
        name: user.name,
        publicRepos: user.public_repos,
        followers: user.followers,
        following: user.following,
        totalStars,
        totalForks,
        topLanguages,
        topRepos,
        activityMap,
        profileUrl: `https://github.com/${GITHUB_USERNAME}`,
        memberSince: new Date(user.created_at).getFullYear(),
    };
};

export const fetchWakatimeData = async () => {
    if (!WAKATIME_API_KEY) return null;

    const encoded = btoa(WAKATIME_API_KEY);
    const res = await fetch(`https://wakatime.com/api/v1/users/current/stats/last_7_days`, {
        headers: { Authorization: `Basic ${encoded}` },
    });

    if (!res.ok) throw new Error('WakaTime API error');
    const json = await res.json();
    const d = json.data;

    return {
        totalSeconds: d.total_seconds_including_other_language,
        humanReadableTotal: d.human_readable_total_including_other_language,
        dailyAverage: d.human_readable_daily_average_including_other_language,
        languages: (d.languages || []).slice(0, 6).map(l => ({
            name: l.name,
            percent: l.percent,
            text: l.text,
        })),
        editors: (d.editors || []).slice(0, 4).map(e => ({
            name: e.name,
            percent: e.percent,
        })),
        projects: (d.projects || []).slice(0, 4).map(p => ({
            name: p.name,
            text: p.text,
        })),
        range: d.range,
        hasData: true,
    };
};
