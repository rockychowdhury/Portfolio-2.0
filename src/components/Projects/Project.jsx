import { Github,ArrowUpRight } from 'lucide-react';
const Project = ({ project }) => {
    return (
        <div className="bg-secondary/40 hover:bg-secondary rounded-2xl p-5 space-y-2 shadow-md hover:scale-105 transition">
            <figure className="w-full">
                <img className="w-full min-h-72  rounded-2xl" src={project.preview} alt="preview" />
            </figure>
            <div className='flex items-center justify-between'>
                <h3 className="font-medium text-xl">{project.name}</h3>
                <div className='px-5 flex items-center gap-4'>
                    <p className='bg-natural rounded-full p-1 text-slate-200  shadow-md hover:scale-105 transition'><a target='_blank' href={project.github}><Github size={25} /></a></p>
                    <p className='bg-action rounded-full p-1 text-slate-200  shadow-md hover:scale-105 transition'><a target='_blank' href={project.live}><ArrowUpRight size={25} /></a></p>
                </div>
            </div>
            <h6>{project.type}</h6>
            <div className="flex flex-wrap gap-4">
                {
                    project?.stacks.map((stack, idx) =>
                        <p className="bg-action text-marble font-medium text-sm px-2 rounded-full">{stack}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Project;