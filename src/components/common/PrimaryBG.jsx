import bg from '../../assets/bg1.jpg'
import bg1 from '../../assets/bg2.jpg'
const PrimaryBG = ({ children }) => {

    return (
        <div className='h-fit pb-2'  style={{ backgroundImage: `url(${bg1})` }}>
            <div className='border-b  bg-center rounded-b-[100px] shadow-md' style={{ backgroundImage: `url(${bg})` }}>
                {children}
            </div>
        </div>
    );
};

export default PrimaryBG;