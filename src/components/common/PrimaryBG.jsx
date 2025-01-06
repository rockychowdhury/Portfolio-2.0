import bg from '../../assets/bg1.jpg'
import bg1 from '../../assets/bg2.jpg'
const PrimaryBG = ({ children }) => {

    return (
        <div className='h-fit'  style={{ backgroundImage: `url(${bg1})` }}>
            <div className=' bg-center ' style={{ backgroundImage: `url(${bg})` }}>
                {children}
            </div>
        </div>
    );
};

export default PrimaryBG;