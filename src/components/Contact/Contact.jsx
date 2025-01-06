import handshake from '../../assets/handshake.png'
import { MailCheck , Linkedin } from 'lucide-react';
const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-8  p-20'>
            <figure className='bg-marble p-2 border rounded-full w-20'>
                <img className='' src={handshake} alt="" />
            </figure>
            <h1 className='text-3xl font-medium text-center'>Tell me about your next project</h1>
            <div className='flex gap-4 items-center'>
                <button className='text-marble bg-black flex items-center gap-2 font-semibold px-6 py-3 rounded-full'><MailCheck size={28} /> Email Me</button>
                <button className='text-marble bg-black flex items-end gap-2 font-semibold px-6 py-3 rounded-full'><Linkedin size={28} />LinkedIn</button>
            </div>
        </div>
    );
};

export default Contact;