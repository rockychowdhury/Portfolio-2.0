import bg from '../../assets/bg2.jpg'
import bg1 from '../../assets/bg1.jpg'
const InvertedSecondaryBg = ({ children }) => {
    return (
        <div className='h-fit' style={{ backgroundImage: `url(${bg1})` }}>
            <div className=' bg-center rounded-[100px] border  ' style={{ backgroundImage: `url(${bg})` }}>
                {children}
            </div>
        </div>
    );
};

export default InvertedSecondaryBg;