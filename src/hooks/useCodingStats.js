import { useState, useEffect } from 'react';
import {
    fetchCodeforcesData,
    fetchLeetCodeData,
    fetchGithubData,
    fetchWakatimeData,
} from '../services/codingAPIs';

const useCodingStats = () => {
    const [state, setState] = useState({
        codeforces: null,
        leetcode: null,
        github: null,
        wakatime: null,
        loading: { codeforces: true, leetcode: true, github: true, wakatime: true },
        errors: { codeforces: null, leetcode: null, github: null, wakatime: null },
    });

    useEffect(() => {
        const load = async (key, fetchFn) => {
            try {
                const data = await fetchFn();
                setState(prev => ({
                    ...prev,
                    [key]: data,
                    loading: { ...prev.loading, [key]: false },
                }));
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    loading: { ...prev.loading, [key]: false },
                    errors: { ...prev.errors, [key]: err.message },
                }));
            }
        };

        load('codeforces', fetchCodeforcesData);
        load('leetcode', fetchLeetCodeData);
        load('github', fetchGithubData);
        load('wakatime', fetchWakatimeData);
    }, []);

    return state;
};

export default useCodingStats;
