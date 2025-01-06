import bg from '../../assets/bg2.jpg'
import bg1 from '../../assets/bg1.jpg'

const SecondaryBg = ({ children }) => {

    return (
        <div  className='h-fit pb-2'  style={{ backgroundImage: `url(${bg1})` }}>
            <div className=' bg-center rounded-b-[100px] border-b  ' style={{ backgroundImage: `url(${bg})` }}>
                {children}
            </div>
        </div>
    );
};

export default SecondaryBg;
