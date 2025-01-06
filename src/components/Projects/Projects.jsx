
import { useEffect, useState } from 'react';
import PrimaryBG from '../common/PrimaryBG';
import { div, h1 } from 'framer-motion/client';
import Project from './Project';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <PrimaryBG>
            <div className='container py-20 space-y-4'>
                <div >
                    <h1 className='text-4xl font-semibold'>Projects</h1>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        projects.map((project, idx) => (
                            <Project key={idx} project={project}></Project>
                        ))
                    }
                </div>
            </div>
        </PrimaryBG>
    );
};

export default Projects;