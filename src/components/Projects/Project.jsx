import { Github,ArrowUpRight } from 'lucide-react';
const Project = ({ project }) => {
    return (
        <div className="card-glass rounded-2xl p-5 space-y-2 hover:scale-105 transition duration-300">
            <figure className="w-full overflow-hidden rounded-2xl">
                <img className="w-full min-h-72 hover:scale-110 transition-transform duration-300" src={project.preview} alt="preview" />
            </figure>
            <div className='flex items-center justify-between'>
                <h3 className="font-medium text-xl text-accent">{project.name}</h3>
                <div className='px-5 flex items-center gap-4'>
                    <p className='bg-darkCard border border-accent/30 rounded-full p-1 text-accent shadow-glow hover:scale-105 transition'><a target='_blank' href={project.github}><Github size={25} /></a></p>
                    <p className='bg-accent rounded-full p-1 text-darkBg shadow-glow hover:scale-105 transition'><a target='_blank' href={project.live}><ArrowUpRight size={25} /></a></p>
                </div>
            </div>
            <h6 className='text-darkText/70'>{project.type}</h6>
            <div className="flex flex-wrap gap-4">
                {
                    project?.stacks.map((stack, idx) =>
                        <p key={idx} className="bg-accent/20 text-accent font-medium text-sm px-3 py-1 rounded-full border border-accent/40">{stack}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Project;