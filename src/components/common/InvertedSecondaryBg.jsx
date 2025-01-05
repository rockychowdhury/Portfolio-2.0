import bg from '../../assets/bg2.jpg'
import bg1 from '../../assets/bg1.jpg'
const InvertedSecondaryBg = ({ children }) => {
    return (
        <div className='h-fit -mt-2  ' style={{ backgroundImage: `url(${bg1})` }}>
            <div className=' bg-center rounded-[100px] border shadow-top-md  ' style={{ backgroundImage: `url(${bg})` }}>
                {children}
            </div>
        </div>
    );
};

export default InvertedSecondaryBg;